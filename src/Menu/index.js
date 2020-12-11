// import React, { Component } from 'react'
// import { Input, Menu } from 'semantic-ui-react'
//
// export default class Menus extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       activeItem: 'home',
//     }
//   }
//
//
//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
//
//   render() {
//     const { activeItem } = this.state
//
//     return (
//       <Menu secondary>
//         <Menu.Item
//           name='home'
//           active={activeItem === 'home'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='New trip'
//           active={activeItem === 'New trip'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='Edit Trip'
//           active={activeItem === 'friends'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Menu position='right'>
//           <Menu.Item>
//             <Input icon='search' placeholder='Search...' />
//           </Menu.Item>
//           <Menu.Item
//             name='logout'
//             active={activeItem === 'logout'}
//             onClick={props.logout}
//           />
//         </Menu.Menu>
//       </Menu>
//     )
//   }
// }
