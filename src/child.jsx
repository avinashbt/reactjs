import React , {memo} from 'react'

const Child = ({read , add}) => {
    console.log('Child component rendered');
  return (
<>
    <div>
      Child component
    </div>

    <div>{add}</div>
</>
  )
}

export default memo(Child);
