export const warn = (message) => {
  console.warn(`[vue-element-validate] ${message}`)
}

export const createError = (message) => new Error(`[vue-element-validate] ${message}`)

export const isNullOrUndefined = (value) => { return value === null || value === undefined }

export const assign = (target, ...others) => {
  return Object.assign(target, ...others)
}

// 通过某个函数查找某个元素是否符合
export const find = (arrayLike, predicate) => {
  const array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike)
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return array[i]
    }
  }
  return undefined
}

// 类数组转换数组
export const toArray = (arrayLike) => {
  return Array.from(arrayLike)
}

// field字段id生成器
let id = 0
let idTemplate = '{id}'
export const uniqId = () => {
  if (id >= 9999) {
    id = 0
    idTemplate = idTemplate.replace('{id}', '_{id}')
  }
  id++
  const newId = idTemplate.replace('{id}', String(id))
  return newId
}

// rules规则
export const normalizeRules = (rules) => {
  rules.split('|').reduce((prev, rule) => {
    const parsedRule = parseRule(rule)
    if (!parsedRule.name) {
      return prev
    }

    prev[parsedRule.name] = parsedRule.params
    return prev
  }, {})
}
export const parseRule = (rule) => {
  let params = []
  const name = rule.split(':')[0]

  if (~rule.indexOf(':')) {
    params = rule.split(':').slice(1).join(':').split(',')
  }

  return { name, params }
}
