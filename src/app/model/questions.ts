export interface Question {
    number: number,
    question: string,
    options: Array<Option>,
}

export interface Option {
    label: string,
    answer?: boolean,
}