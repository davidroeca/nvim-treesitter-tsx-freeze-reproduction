import React from 'react'

interface ThisComponentCannotBeEditedProps {
  subtext: string
}

const ThisComponentCannotBeEdited = ({
  subtext,
}: ThisComponentCannotBeEditedProps) => {
  return <p>{subtext}</p>
}

interface LoadedFailingCaseProps {
  result1Data: string[]
  result2Data: string[]
}

const LoadedFailingCase = ({
  result1Data,
  result2Data,
}: LoadedFailingCaseProps) => {
  const create = async (v: any) => {
    return
  }
  const update = async (v: any) => {
    return
  }
  const submitData = async () => {
    await Promise.all([
      create({
        a: {
          b: true,
        },
      }),
      update({
        b: {
          c: true,
        },
      }),
    ])
  }
  return (
    <>
      <div className="one" onClick={() => submitData()}>
        Hey
      </div>
      <ul>
        {result1Data.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {result2Data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

const MyInput = ({ ...props, onChange: wrappedOnChange }) => (
  <input
    {...props}
    onChange={(event) => wrappedOnChange(event, event.target)}
  />
)

const FailingCase = () => {
  const result1 = {
    error: null,
    loading: false,
    data: [],
  }
  const result2 = {
    error: null,
    loading: false,
    data: [],
  }
  const [value, setValue] = React.useState('')
  return result1.error || result2.error ? (
    <p>Error loading data</p>
  ) : result1.loading || result2.loading ? (
    <ThisComponentCannotBeEdited subtext="loading" />
  ) : !result1.data || !result2.data ? (
    <p>No data</p>
  ) : (
    <div>
      <MyInput
        type="text"
        onChange={(_, { value }) => setValue(String(value))}
        value={value}
      />
      <LoadedFailingCase
        result1Data={result1.data}
        result2Data={result2.data}
      />
    </div>
  )
}

export default FailingCase
