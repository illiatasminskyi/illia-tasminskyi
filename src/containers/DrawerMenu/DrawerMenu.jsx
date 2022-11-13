import { CloudDownloadOutlined } from '@ant-design/icons'
import { Col, Drawer, Row } from 'antd'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const DrawerMenu = ({ open, onClose }) => {
	const linkStyle = {
		margin: '18px auto',
		height: '35px',
		fontSize: '16px',
	}

	return (
		<>
			<Drawer
				width={'100%'}
				title='Menu'
				placement='right'
				onClose={onClose}
				open={open}
				drawerStyle={{
					background: '#1e2433',
				}}
			>
				<Row justify='center' style={{ padding: '40px 0' }}>
					<Col span={24} style={{ display: 'flex' }}>
						<NavLink to='/' className='links' style={linkStyle}>
							Home
						</NavLink>
					</Col>
					<Col span={24} style={{ display: 'flex' }}>
						<NavLink to='portfolio' className='links' style={linkStyle}>
							Portfolio
						</NavLink>
					</Col>
					<Col span={24} style={{ cursor: 'pointer', display: 'flex' }}>
						<Link
							to='/files/CV-en.pdf'
							target='_blank'
							className='links'
							style={linkStyle}
							download
						>
							CV <CloudDownloadOutlined />
						</Link>
					</Col>
				</Row>
			</Drawer>
		</>
	)
}

export default DrawerMenu
