const path = require("path")
var fs = require("fs")
module.exports = function outputFileWithTransformed(targetDir, processingMethod) {
    const targetFilePath = path.resolve(targetDir)
    const targetFile = fs.readFileSync(targetFilePath)
    const artifact = processingMethod(targetFile)
    /**
     * process.execPath node.exe所在路径
     * __dirname 本文件所在路径
     * path.resolve(targetFilePath, "..", "ana-file") 目标路径相邻位置
     */
    // 输出到执行代码的位置
    const artifactDir = path.resolve(process.cwd(), "ana-file")
    console.log("文件已输出到: " + artifactDir)
    fs.writeFileSync(artifactDir, artifact)
}