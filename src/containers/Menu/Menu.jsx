import { Col, Row } from 'antd'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CloudDownloadOutlined } from '@ant-design/icons'
import './Menu.sass'

const Menu = () => {
	return (
		<Row justify='space-between' gutter={66}>
			<Col>
				<NavLink to='/' className='links'>
					Home
				</NavLink>
			</Col>
			<Col>
				<NavLink to='portfolio' className='links'>
					Portfolio
				</NavLink>
			</Col>
			<Col style={{ cursor: 'pointer' }}>
				<Link
					to='/files/CV-illia-tasminskyi.pdf'
					target='_blank'
					className='links'
					download
				>
					CV <CloudDownloadOutlined />
				</Link>
			</Col>
		</Row>
	)
}

export default Menu
