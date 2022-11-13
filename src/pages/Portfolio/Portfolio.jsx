import React from 'react'
import { Row, Col, Space } from 'antd'
import TodoListImg from './img/TodoList.png'
import ClockImg from './img/ClockImg.png'
import GithubImg from './img/GithubImg.png'
import './Portfolio.sass'

export const ProjectState = [
	{
		name: 'Todo List',
		img: TodoListImg,
		link: 'https://todolist-63537.web.app/',
		status: 'React',
	},
	{
		name: 'Clock',
		img: ClockImg,
		link: 'https://clock-sigma-five.vercel.app/',
		status: 'React',
	},
	{
		name: 'GitHub Users',
		img: GithubImg,
		link: 'https://git-hub-users-three.vercel.app/',
		status: 'React',
	},
]

const Portfolio = () => {
	return (
		<Row gutter={24}>
			{ProjectState.map(project => (
				<Col
					style={{
						width: '280px',
						height: 'auto',
						paddingBottom: '8px',
						margin: '0 auto',
					}}
					className={'links'}
				>
					<a href={project.link} target='_blank' className='link'>
						<Space direction='vertical'>
							<img
								src={project.img}
								alt='foto'
								className='imgProject'
								style={{ width: '100%', maxWidth: 'inherit' }}
							/>
							<div>{project.name}</div>
						</Space>
					</a>
				</Col>
			))}
		</Row>
	)
}

export default Portfolio
