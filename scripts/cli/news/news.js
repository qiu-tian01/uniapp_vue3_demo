import path from "path"
import fs from "fs"
import prompts from "prompts"
import { exec, execSync } from "child_process"
import { error } from "console"

const __dirName = path.resolve()
const template = `
<template>
  <div></div>
</template>

<script setup lang="ts"></script>

<style></style> 
`

console.log(`dirpath`, __dirName)

const pageJsonPath = path.join(__dirName, "src/pages.json")
const projectPath = path.join(__dirName, "src/pages")
const packagesList = ["pages"]

async function createPath() {
  const appName = fs.readdirSync(projectPath)

  const answer = await prompts([
    {
      type: "select",
      name: "packageName",
      message: "新增页面属于哪个包?",
      choices: packagesList,
      initial: 0
    },
    {
      type: "text",
      message: "请输入页面名称",
      initial: "Index",
      name: "projectName",
      validate: (val) => {
        // 检查是否为空
        if (!val) {
          return "❌ 项目名不能为空"
        }
        for (const item of appName) {
          if (item === val) {
            return "❌ 项目已存在,请重新输入"
          }
        }
        return true
      }
    }
  ])
  handleAddFile(answer)
}

function handleTemplate(data) {
  const { packageName, projectName } = data
  const pagesTemplate = `${packagesList[packageName]}/${projectName}/${projectName}`

  fs.readFile(pageJsonPath, (err, data) => {
    if (err) {
      console.error("[read pages file err]:".err)
      return
    }
    const file = JSON.parse(data.toString())
    file.pages.push({
      path: pagesTemplate,
      style: { navigationBarTitleText: "uni-app" }
    })
    const json = JSON.stringify(file)
    fs.writeFile(pageJsonPath, json, (err, data) => {
      if (err) {
        console.error(`[write pages file error]:`, err)
        return
      }
      console.log(`🚀pages.json添加成功!!`)
    })
  })
}

function handleAddFile(data) {
  const { packageName, projectName } = data
  const pagesTemplate = path.join(projectPath, `${projectName}/${projectName}.vue`)
  const pagesPath = path.join(projectPath, `${projectName}`)
  fs.exists(pagesPath, function (exists) {
    if (!exists) {
      fs.mkdir(pagesPath, (err) => {
        if (err) {
          console.error(err)
        }
      })
      fs.writeFile(pagesTemplate, template, function (err) {
        if (err) {
          return console.log(err)
        }
        console.log(`🚀项目文件添加成功!!`)
        handleTemplate(data)
      })
    } else {
      console.log(`❌ 项目已存在`)
    }
  })
}

createPath()
