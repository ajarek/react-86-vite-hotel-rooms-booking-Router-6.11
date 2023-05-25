export function getDaysDifference(date1, date2) {
  const dateObj1 = new Date(date1)
  const dateObj2 = new Date(date2)

  const timeDiff = Math.abs(dateObj2.getTime() - dateObj1.getTime())

  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

  return daysDiff
}
