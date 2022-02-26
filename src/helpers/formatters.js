export const limitString = (string, limit) => {
  if (!limit || !string || string.length <= limit) {
    return string
  }

  return `${string.slice(0, limit).trim()}...`
}

export const getHour = () => {
  const currentDate = new Date()
  return `${addZero(currentDate.getHours())}:${addZero(currentDate.getMinutes())}`
}

export const addZero = i => {
  if (i < 10) {
    i = '0' + i
  }
  return i
}
