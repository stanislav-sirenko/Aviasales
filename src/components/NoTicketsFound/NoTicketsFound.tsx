import { Alert, Space } from 'antd'

const NoTicketsFound: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert description="Билетов не найдено!" type="info" />
  </Space>
)

export default NoTicketsFound
