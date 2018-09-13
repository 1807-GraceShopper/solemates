import React from 'react'
import {NavLink} from 'react-router-dom'

const AllProductsList = props => {
	return (
		<ul>
			{props.products.map(product => {
				return (
					<li key={product.id}>
						<div>
							<NavLink to={`/products/${product.id}`}>
								{product.name}
							</NavLink>
							<div>
								<p>{product.description}</p>
							</div>
							<div>
								{product.price}
								<div>
									<img src={`/${product.photoUrl}`} />
								</div>
							</div>
						</div>
						{props.user.isAdmin ? (
							<button
								type="button"
								onClick={() => props.handleDelete(product)}
							>
								Delete
							</button>
						) : (
							''
						)}
					</li>
				)
			})}
		</ul>
	)
}

export default AllProductsList