import dayjs from 'dayjs'

export const formatDate = (input: string, dateFormat: string) => input && dayjs(input).format(dateFormat)