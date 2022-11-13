import { Col, Row, Space, Typography } from 'antd'
import React from 'react'
import './Home.sass'
import github from './svg/gitHub.svg'
import img from './svg/imgHome.svg'
import linkedin from './svg/linkedin.svg'
import tel from './svg/Tel.svg'

const Home = () => {
	return (
		<Row justify='center' className='homeRow'>
			<Col style={{ display: 'flex', padding: '50px 0' }}>
				<div
					style={{
						margin: '0 auto',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-evenly',
					}}
				>
					<div className='hello'>
						He<span style={{ color: 'rgb(240, 78, 35)' }}>l</span>
						<span style={{ color: 'rgb(0, 174, 224)' }}>l</span>o!
					</div>
					<br />
					<div className='iconsAndText'>
						<div className='text illia'>
							My name is I<span style={{ color: 'rgb(240, 78, 35)' }}>l</span>
							<span style={{ color: 'rgb(0, 174, 224)' }}>l</span>ia
						</div>
						<Space align='center'>
							<a
								href='https://github.com/illia-com'
								target='_blank'
								rel='noreferrer'
							>
								<img src={github} className='icon' alt='Telegram' />
							</a>
							<a
								href='https://t.me/illiaTasminskyi'
								target='_blank'
								rel='noreferrer'
							>
								<img src={tel} className='icon' alt='Telegram' />
							</a>
							<a
								href='https://www.linkedin.com/in/illia-tasminskyi-6349331b6/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={linkedin} className='icon' alt='Telegram' />
							</a>
						</Space>
					</div>
					<br />
					<div className='text'>I'm a Frontend developer</div>
				</div>
			</Col>
			<Col span={12} className='imgHomeCol'>
				<img src={img} alt='PF' className='imgHome' />
			</Col>
			<Col>
				<div
					className='text'
					style={{ marginTop: '50px', textAlign: 'center' }}
				>
					We<span style={{ color: 'rgb(240, 78, 35)' }}>l</span>come To My
					Persona<span style={{ color: 'rgb(0, 174, 224)' }}>l</span> Portfo
					<span style={{ color: 'rgb(240, 78, 35)' }}>l</span>io
				</div>
			</Col>
		</Row>
	)
}

export default Home
