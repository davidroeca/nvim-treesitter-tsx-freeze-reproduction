import React from 'react'


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
    <div className="this is fine">Error loading data</div>
  ) : result1.loading || result2.loading ? (
    <div className="so is this" />
  ) : !result1.data || !result2.data ? (
    <div className="this will freeze">No Data</div>
  ) : (
    <div>
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button
        disabled={result1.loading}
        autofocus={result2.loading}
      />
    </div>
  )
}

export default FailingCase
