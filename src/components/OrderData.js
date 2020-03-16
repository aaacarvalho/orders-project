import React, { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'
import InputContainer from './InputContainer'
import Button from './Button'
import Api from '../services/api'
import Loading from './Loading'
import validateFields from '../functions/validateFields'

const OrderData = props => {
    const [currentCity, setCurrentCity] = useState(props.cities[0].id)
    const [neighborhoods, setNeighborhoods] = useState(props.neighborhoods.filter(el => el.city_id === currentCity))
    const [currentNeighborhood, setCurrentNeighborhood] = useState(neighborhoods[0])
    const [deliveryPrice, setDeliveryPrice] = useState(parseFloat(currentNeighborhood.price))

    /*
        User informations form 
    */
   
        /*
            Input Handlers
        */

        const cityHandler = e => {
            const city = props.cities.find(el => el.name === e.target.value)
            setCurrentCity(city.id)
        }

        const neighborhoodHandler = e => {
            const neighborhood = neighborhoods.find(el => el.name === e.target.value)
            setCurrentNeighborhood(neighborhood)
        }

        /*
            Use Effects
        */

        useEffect(() => {
            const price = parseFloat(currentNeighborhood.price)
            setDeliveryPrice(price)
        }, [currentNeighborhood])

        useEffect(() => {
            setCurrentNeighborhood(neighborhoods[0])
        }, [neighborhoods])

        useEffect(() => {
            setNeighborhoods(props.neighborhoods.filter(el => el.city_id === currentCity))
        }, [currentCity])

    /* =========================================================================================== */

    /*
        Products
    */

    const [currentSnackCategory, setCurrentSnackCategory] = useState(props.snacks_categories[0].id)
    const [snacks, setSnacks] = useState(props.snacks.filter(el => el.category_id === currentSnackCategory))
    const [currentSnack, setCurrentSnack] = useState(snacks[0])
    const [quantity, setQuantity] = useState('')
    const [total, setTotal] = useState(0)
    const [order, setOrder] = useState([])

        /*
            Input handlers
        */
    
        const snackCategoryHandler = e => {
            const category = props.snacks_categories.find(s => s.name === e.target.value)
            setCurrentSnackCategory(category.id)
        }

        const snacksHandler = e => {
            setCurrentSnack(snacks.find(el => el.name === e.target.value))
        }

        const quantityHandler = e => {
            if (isNaN(e.target.value)) {
                setQuantity('')
            } else {
                setQuantity(parseInt(e.target.value))
            }
        }

        /*
            Helpers
        */

        const addToOrder = () => {
            const newItem = {
                id: currentSnack.id,
                name: currentSnack.name,
                price: currentSnack.price,
                category: props.snacks_categories.find(el=> el.id === currentSnackCategory),
                quantity,
                total
            }

            if (newItem.quantity > 0 && newItem.quantity % currentSnack.minimum === 0)
                setOrder([...order, newItem])
        }

        const orderTitle = () => {
            if (order.length)
                return (
                    <ul className='order-list order-list--header'>
                        <li>Item</li>
                        <li>Nome</li>
                        <li>Categoria</li>
                        <li>Preço</li>
                        <li>Quantidade</li>
                        <li>Total</li>
                    </ul>
                )
        }

        /*
            Use Effects
        */

        useEffect(() => {
            setSnacks(props.snacks.filter(el => el.category_id === currentSnackCategory))

        }, [currentSnackCategory])

        useEffect(() => {
            setCurrentSnack(snacks[0])
        }, [snacks])

        useEffect(() => {
            if (currentSnack)
                setTotal(currentSnack.price * quantity)

        }, [quantity, currentSnack])

        useEffect(() => {
            setQuantity(0)
        }, [currentSnack])

    /* =========================================================================================== */

    /*
        Send order
    */

    const [customerData, setCustomerData] = useState({
        name: '',
        cellphone: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        city: props.cities.find(el => el.id === currentCity),
        neighborhood: currentNeighborhood.name,
        street: '',
        number: '',
        comp: '',
        delivery: false,
        price: deliveryPrice
    })

    const nameHandler = e => setCustomerData({...customerData, name: e.target.value})
    const cellphoneHandler = e => setCustomerData({...customerData, cellphone: e.target.value})
    const emailHandler = e => setCustomerData({...customerData, email: e.target.value})
    const phoneHandler = e => setCustomerData({...customerData, phone: e.target.value})
    const dateHandler = e => setCustomerData({...customerData, date: e.target.value})
    const timeHandler = e => setCustomerData({...customerData, time: e.target.value})
    const streetHandler = e => setCustomerData({...customerData, street: e.target.value})
    const numberHandler = e => setCustomerData({...customerData, number: e.target.value})
    const compHandler = e => setCustomerData({...customerData, comp: e.target.value})
    const deliveryHandler = e => setCustomerData({...customerData, delivery: e.target.checked})
    const [orderMessage, setOrderMessage] = useState('')

    const sendOrder = async () => {
        
        if (order.length) {
            if (validateFields(customerData)) {
                const body = JSON.stringify({
                    order,
                    customerData
                })

                setOrderMessage(<Loading />)
        
                const { data } = await Api.post('/orders', body)
                
                if (data.success) {
                    setOrderMessage(<p className='success'>Seu pedido foi criado com sucesso!</p>)
                } else {
                    setOrderMessage(<p className='error'>Houve algum problema ao criar o seu pedido. Por favor, tente novamente!</p>)
                }
            } else {
                setOrderMessage(<p className='warning'>Preencha todos os campos!</p>)
            }
        } else {
            setOrderMessage(<p className='warning'>Seu pedido não contém nenhum produto!</p>)
        }
    }

    useEffect(() => {
        setCustomerData({...customerData, city: props.cities.find(el => el.id === currentCity)})   
    }, [currentCity])

    useEffect(() => {
        setCustomerData({...customerData, neighborhood: currentNeighborhood.name})
    }, [currentNeighborhood])

    useEffect(() => {
        setCustomerData({...customerData, price: deliveryPrice})
    }, [deliveryPrice])

    /*
        Render
    */

    const renderCitiesOptions = () => {
        let listOfCities = ''

        if (Array.isArray(props.cities))
            if (props.cities.length) {
                listOfCities = props.cities.map(e => <option key={e.id}>{e.name}</option>)
            } 

        return listOfCities
    }

    const renderNeighborhoodsOptions = () => {
        let listOfNeighborhoods = ''

        if (Array.isArray(props.neighborhoods))
            if (props.neighborhoods.length && currentCity) {
                listOfNeighborhoods = neighborhoods.map(el => {
                    if (el.city_id === currentCity)
                        return <option key={el.id}>{el.name}</option>
                })
            }

        return listOfNeighborhoods
    }

    const renderSnacksCategoriesOptions = () => {
        let listOfSnacksCategories = ''

        if (Array.isArray(props.snacks_categories))
            if (props.snacks_categories.length) {
                listOfSnacksCategories = props.snacks_categories.map(el => <option key={el.id}>{el.name}</option>)
            }

        return listOfSnacksCategories
    }

    const renderSnacksOptions = () => {
        let listOfSnacks = ''

        if (Array.isArray(props.snacks))
            if (props.snacks.length) {
                listOfSnacks = snacks.map(el => <option key={el.id}>{el.name}</option>)
            }
            
        return listOfSnacks
    }

    return(
        <>
            <SectionTitle title='Faça o seu pedido'/>
            <div className='order-container'>
                <h3>Informações Pessoais</h3>
                <InputContainer>
                    Nome
                    <input type='text' placeholder='Nome' onChange={e => nameHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Celular
                    <input type='number' placeholder='Celular' onChange={e => cellphoneHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Email
                    <input type='email' placeholder='Email' onChange={e => emailHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Telefone
                    <input type='number' placeholder='Telefone' onChange={e => phoneHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Data para entrega do pedido
                    <input type='date' onChange={e => dateHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Hora para entrega do pedido
                    <input type='time' onChange={e => timeHandler(e)}/>
                </InputContainer>
            </div>
            <div className='order-container'>
                <h3>Endereço de Entrega</h3>
                <InputContainer>
                    Cidade
                    <select onChange={e => cityHandler(e)}>
                        {
                            renderCitiesOptions()
                        }
                    </select>
                </InputContainer>
                <InputContainer>
                    Bairro
                    <select onChange={e => neighborhoodHandler(e)}>
                        {
                            renderNeighborhoodsOptions()
                        }
                    </select>
                </InputContainer>
                <InputContainer>
                    Endereço
                    <input type='text' placeholder='Rua' onChange={e => streetHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Número
                    <input type='number' placeholder='Nº' min='0' onChange={e => numberHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Complemento
                    <input type='text' placeholder='Complemento' onChange={e => compHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Valor de Entrega: R$ { isNaN(deliveryPrice) ? '0,00' : deliveryPrice.toFixed(2).replace('.', ',') }

                    <label>
                        Incluir Entrega?
                        <input type='checkbox' onChange={e => deliveryHandler(e)}/>
                    </label>
                </InputContainer>
            </div>
            <div className='products'>
                <h3>Escolha seus produtos</h3>
                <ul className='products__title'>
                    <li>Categoria</li>
                    <li>Nome</li>
                    <li>Preço Unitário</li>
                    <li>Quantidade</li>
                    <li>Total</li>
                </ul>
                <ul className='products__menu'>
                    <li>
                        <InputContainer>
                            <p>Categoria</p>
                            <select onChange={e => snackCategoryHandler(e)}>
                                {
                                    renderSnacksCategoriesOptions()
                                }
                            </select>
                        </InputContainer>
                    </li>
                    <li>
                        <InputContainer>
                            <p>Nome</p>
                            <select onChange={e => snacksHandler(e)}>
                                {
                                    renderSnacksOptions() 
                                }
                            </select>
                        </InputContainer>
                    </li>
                    <li>
                        <p>Valor unitário</p>
                        R$ {currentSnack ? parseFloat(currentSnack.price).toFixed(2).replace('.', ',') : '0,00'}
                    </li>
                    <li>
                        <InputContainer>
                            <p>Quantidade mínima</p>
                            <input type='number' min='0' value={isNaN(quantity) ? '' : quantity} step={currentSnack ? currentSnack.minimum : 1} onChange={e => quantityHandler(e)}/>
                            <small>Escolha de {currentSnack ? currentSnack.minimum : 1} em {currentSnack ? currentSnack.minimum : 1} </small>
                        </InputContainer>
                    </li>
                    <li>
                        <p>Total</p>
                        <div>R$ { isNaN(total) ? '0,00' : total.toFixed(2).replace('.', ',')}</div>
                    </li>
                </ul>
                <Button title='Adicionar ao pedido' action={addToOrder} />                
            </div>
            <div className='your-order'>
                <h3>Seu pedido</h3>
                {
                    orderTitle()
                }
                {
                    order.map((el, i) =>{
                        return(
                            <ul className='order-list' key={i}>
                                <li>{i+1}</li>
                                <li>{el.name}</li>
                                <li>{el.category.name}</li>
                                <li>R$ {parseFloat(el.price).toFixed(2).replace('.', ',')}</li>
                                <li>{el.quantity}</li>
                                <li>R$ {el.total.toFixed(2).replace('.', ',')}</li>
                            </ul>
                        )
                    })
                }
                <p className='order-total'>
                    Total do pedido: R$ { order.reduce((t, e) => t + e.total, 0).toFixed(2).replace('.', ',') }
                </p>
                {
                    orderMessage
                }
                <Button title="Enviar pedido" action={sendOrder}/>
            </div>
        </>
    )
}

export default OrderData
