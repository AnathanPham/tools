
const p0 = "huang"
const p1 = "{$1}"
const p2 = "{$2}"
const p3 = "{$3}"

const map = {
    "github": function () {
        return p0.replace(/^\S/, (s) => {
            return s.toLocaleUpperCase()
        }) + p1 + p2
    },
    "npm": function () {
        return p0.replace(/^\S/, (s) => {
            return s.toLocaleUpperCase()
        }) + p1 + p3
    },
}
function getPlatform() {
    const platformList = Object.keys(map)
    console.log(platformList)
    return platformList
}
function getPassword(platform) {
    if (!platform) {
        return console.log("请输入平台名称，getPassword.getPlatform获取平台信息")
    }
    if (map[platform]) {
        const password = map[platform]()
        console.log("该平台的密码是: " + password)
    } else {
        console.log("无效的平台名称，getPassword.getPlatform获取平台信息")
    }

}
getPassword.getPlatform = getPlatform
module.exports = getPassword
