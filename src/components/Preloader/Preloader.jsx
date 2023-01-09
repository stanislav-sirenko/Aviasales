import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 50,
      margin: 20,
    }}
    spin
  />
)
const Loading = () => <Spin indicator={antIcon} />
export default Loading
