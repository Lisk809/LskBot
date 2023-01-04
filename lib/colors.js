var colors = {}
colors.green= word => {
    return '\x1B[32m' + word + '\x1B[0m'
}
colors.red= word => {
    return '\x1B[31m' + word + '\x1B[0m'
}
colors.cyan= word => {
    return '\x1B[36m' + word + '\x1B[0m'
}
colors.yellow= word => {
    return '\x1B[33m' + word + '\x1B[0m'
}
colors.magenta= word => {
    return '\x1B[35m' + word + '\x1B[0m'
}
colors.gray= word => {
    return '\x1B[90m' + word + '\x1B[0m'
}
colors.blue= word => {
    return '\x1B[34m' + word + '\x1B[0m'
}
colors.white= word => {
    return '\x1B[37m' + word + '\x1B[0m'
}
module.exports=colors