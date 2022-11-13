import { Col } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
	const navigate = useNavigate()
	return (
		<Col
			style={{ fontSize: '18px', cursor: 'pointer' }}
			onClick={() => navigate('/')}
		>
			<span style={{ color: '#F04E23' }}>&lt; </span>
			<span style={{ color: '#FFFFFF' }}> IT </span>
			<span style={{ color: '#00AEE0' }}>/</span>
			<span style={{ color: '#F04E23' }}>&gt;</span>
		</Col>
	)
}

export default Logo
