import { MenuFoldOutlined } from '@ant-design/icons'
import { Col, Layout, Row, Tooltip, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Logo } from '../../components'
import DrawerMenu from '../DrawerMenu/DrawerMenu'
import Menu from '../Menu/Menu'
import './Layout.sass'
const { Header, Content } = Layout

const LayoutContainer = ({ children }) => {
	const [size, setSize] = useState()
	const ref = React.useRef()

	const resizeHandler = () => {
		const { clientWidth } = ref.current || {}
		setSize(clientWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', resizeHandler)
		resizeHandler()
		return () => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [])

	// burger
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}

	const onClose = () => {
		setOpen(false)
	}

	return (
		<Layout className='layout' ref={ref}>
			<Header
				style={{
					width: '80%',
					margin: '0 auto',
					padding: '20px 0',
					background: 'none',
				}}
			>
				<Row justify='space-between'>
					<Logo />
					<Col>
						{size >= 600 ? (
							<Menu />
						) : (
							<MenuFoldOutlined
								className='burger-menu'
								onClick={() => showDrawer()}
							/>
						)}
					</Col>
				</Row>
				<DrawerMenu open={open} onClose={onClose} />
			</Header>
			<Content
				className='site-layout'
				style={{ padding: '0 50px', marginTop: 64 }}
			>
				<div
					className='site-layout-background'
					style={{ alignContent: 'center' }}
				>
					{children}
				</div>
			</Content>
			{/* <Footer style={{ textAlign: 'center' }}>
			Ant Design ©2018 Created by Ant UED
		</Footer> */}
		</Layout>
	)
}
export default LayoutContainer
