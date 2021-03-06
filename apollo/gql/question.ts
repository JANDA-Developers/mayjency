import { gql } from "@apollo/client"
import { F_PAGE, F_QUESTION } from "./fragments"


export const QUESTION_LIST = gql`
  query questionList(
    $sort: [_QuestionSort!]
    $filter: _QuestionFilter
    $pageInput: pageInput!
  ) {
  QuestionList(
    sort: $sort
    pageInput: $pageInput
    filter: $filter
  ) {
    ok
    error
    page {
      ...Fpage
    }
    data  {
      ...Fquestion
    }
  }
  }
  ${F_PAGE}
  ${F_QUESTION}
`

export const QUESTION_CREATE = gql`
  mutation questionCreate(
    $params: QuestionCreateInput!
  ) {
    QuestionCreate(
      params: $params
    ) {
    ok
    error
    data {
      _id
    }
  }
}
`
export const QUESTION_DELETE = gql`
  mutation questionDelete(
    $id: String!
  ) {
    QuestionDelete(
      id:$id
    ) {
    ok
    error 
  }
}
`
export const QUESTION_UPDAET = gql`
  mutation questionUpdate(
    $params: QuestionUpdateInput!
    $id: String!
  ) {
  QuestionUpdate(
      params:$params
      id: $id
    ) {
    ok
    error 
    data {
      _id
    }
  }
}
`


export const QUESTION_FIND_BY_ID = gql`
query questionFindById(
  $id: String!
) {
  QuestionFindById(
    id:$id
  ) {
  ok
  error 
  data {
    ...Fquestion

  }
}
}
${F_QUESTION}
`