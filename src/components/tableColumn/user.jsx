export const userColumn = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (text) => <img src={text} width={150} height={150} />,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
    render: (text) => <span>{text}</span>,
  },
]