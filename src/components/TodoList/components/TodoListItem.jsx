//  'complete': '#AFF19D',
//  'in_progress': '#D8BE3E',
//  'not_started': '#EAE8EC',

import clsx from 'clsx';
import css from './styles/styles.module.css';

const TodoListItem = ({itemData}) => {
    const { state, title, bold } = itemData;
    const classNames = clsx(
        state === 'planned'?
         css.default_background : css[state],
         bold && css.highlighted
         )
   
    return (
      <li className={classNames}>
          {title}
      </li>
    )
  }
  export default TodoListItem;

















// import css from './styles.module.css';
// import clsx from 'clsx';

// const TodoListItem = ({itemData}) => {
//     const {title, state, bold} = itemData;
//     const classNames = clsx(state === 'planned'? css.default_background : css[state])
//     return (
//       <li className={classNames}>
//           {title}
//       </li>
//     )
//   }
//   export default TodoListItem;


 /* Підключення стилів за домогою зовнішніх CSS файлів */

// import './vanillaStyles.css';
// import clsx from 'clsx';

// const TodoListItem = ({itemData}) => {
//     const {title, state, bold} = itemData;
//     const stateClassName = state === 'planned'? 
//      'default_background' : state; 
  
//     return (
//       <li className={clsx('listItem', bold && stateClassName)}>
//           {title}
//       </li>
//     )
//   }
//   export default TodoListItem;

// ___________________________________________________

/* Вкладені стилі Зразок */

// const styles = {
    // fontSize: '20px',
    // listStyle: 'none',
    // textAlign: 'left',
    // padding: '5px 30px',
    // width: '500px',
    // margin: '10px auto',
// };

// const getBGCByState = (state) => {
//     switch (state) {
//         case 'complete':
//             return '#AFF19D';
//         case 'in_progress': 
//             return '#D8BE3E';
//         case 'not_started':
//             return '#EAE8EC';
//         default:
//             return 'grey';
//     }
// }

// const TodoListItem = ({itemData}) => {
//   const {title, state} = itemData;  

//   return (
//     <li
//          style={{
//             ...styles,
//             backgroundColor: getBGCByState(state)
//         }}
//         >
//         {title}
//     </li>
//   )
// }
// export default TodoListItem;

