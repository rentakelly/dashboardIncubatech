const initState = {
    projects: [
        {id: '1', title: 'Conforto termico', content: 'Como achar o conforto termico e tals'},
        {id: '2', title: 'Indice de Gaussen', content: 'O indice de Gaussen serve para classificar o clima'},
        {id: '3', title: 'Indice de Kupper', content: 'O indice de Kupper classifica do glacial ao deserto'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
    }
    return state
}

export default projectReducer