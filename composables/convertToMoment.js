import moment from 'moment'

export function convertToMoment(date) {
    return moment(date).add(8, 'hours').format('MMM Do YYYY HH:mm a')
}