import React from 'react'
import {Alert} from 'react-bootstrap'
import {useParams, useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import {addMobileContext} from '../../context/AddMobileContext'

export default function EditMobile() {
    const {mobileData, success, editMobile} = React.useContext(addMobileContext)
    const [updateState, setUpdateState] = React.useState(0)
    const [product, setProduct] = React.useState(null)
    const screenResolutionRef = React.useRef()
    const chargingWattageRef = React.useRef()
    const antutuBenchmarkRef = React.useRef()
    const chargingTypeRef = React.useRef()
    const frontCameraRef = React.useRef()
    const descriptionRef = React.useRef()
    const screenTypeRef = React.useRef()
    const screenSizeRef = React.useRef()
    const mainCameraRef = React.useRef()
    const processorRef = React.useRef()
    const batteryRef = React.useRef()
    const modelRef = React.useRef()
    const priceRef = React.useRef()
    const brandRef = React.useRef()
    const ramRef = React.useRef()
    const romRef = React.useRef()
    const gpuRef = React.useRef()
    const history = useHistory()
    const {id} = useParams()
    
    React.useEffect(() => {
        mobileData.forEach(item => {
            if (item.id === id && updateState === 0) {
                setProduct({...item})
            }
        })
    }, [updateState, mobileData])
    
    const change5G = () => {
        setProduct({...product, features:{...product.features, fiveG:!product.features.fiveG}})
    }

    const handleData = (e) => {
        let productCopy = product
        productCopy.model = modelRef.current.value
        productCopy.description = descriptionRef.current.value
        productCopy.price = parseInt(priceRef.current.value)
        productCopy.brand = brandRef.current.value
        productCopy.features.ram = parseInt(ramRef.current.value)
        productCopy.features.rom = parseInt(romRef.current.value)
        productCopy.features.screen.size = screenSizeRef.current.value
        productCopy.features.screen.type = screenTypeRef.current.value
        productCopy.features.screen.resolution = screenResolutionRef.current.value
        productCopy.features.battery = parseInt(batteryRef.current.value)
        productCopy.features.charging.type = chargingTypeRef.current.value
        productCopy.features.charging.wattage = parseInt(chargingWattageRef.current.value)
        productCopy.features.processor = processorRef.current.value
        productCopy.features.camera.mainCamera = parseInt(mainCameraRef.current.value)
        productCopy.features.camera.frontCamera = parseInt(frontCameraRef.current.value)
        productCopy.features.gpu = gpuRef.current.value
        productCopy.features.AnTuTuBenchmark = parseInt(antutuBenchmarkRef.current.value)
        setProduct({...productCopy})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProduct({...product, features:{...product.features, screen:{...product.features.screen, size:parseFloat(product.features.screen.size)}}})
        let productCopy = product
        delete productCopy.id
        setProduct({...productCopy})
        editMobile(product, id)
    }

    const handleColorData = (e) => {
        for (let i=0; i<product.colors.length; i++) {
            if (e.target.name.charAt(e.target.name.length - 1) == i) {
                if (e.target.name.split(i)[0] === `stock`) {
                    product.colors[i] = {...product.colors[i], [e.target.name.split(i)[0]]:parseInt(e.target.value)}
                }
                else {
                    product.colors[i] = {...product.colors[i], [e.target.name.split(i)[0]]:e.target.value}
                }
            }
            else {
                product.colors[i] = product.colors[i]
            }
        }
        setUpdateState((prev) => prev + 1)
    }
    
    return (
        <>
            <AdminNavbar/>
            <div className="signup section">
                <div className="addproduct-container">
                    <div className="section">
                        <button className="btn btn-primary" onClick={() => history.push('/adminmobile')}>All Mobiles</button>
                        <button className="btn btn-primary" onClick={() => history.push('/addmobile')}>Add Mobiles</button>
                    </div>
                    {
                        (product) ?
                        <form onSubmit={handleSubmit}>
                            <label>Model <input type="text" ref={modelRef} value={product.model} onChange={handleData} required/></label>
                            <label>Description <input type="text" ref={descriptionRef} value={product.description} onChange={handleData} required/></label>
                            <label>Price <input type="number" ref={priceRef} value={product.price} onChange={handleData} required/></label>
                            <label>Brand <input type="text" ref={brandRef} value={product.brand} onChange={handleData} required/></label>
                            <label>RAM <input type="number" ref={ramRef} value={product.features.ram} onChange={handleData} required/></label>
                            <label>ROM <input type="number" ref={romRef} value={product.features.rom} onChange={handleData} required/></label>
                            <label>Processor<input type="text" ref={processorRef} value={product.features.processor} onChange={handleData} required/></label>
                            <label>GPU<input type="text" ref={gpuRef} value={product.features.gpu} onChange={handleData} required/></label>
                            <label>AnTuTu Benchmark<input type="number" ref={antutuBenchmarkRef} value={product.features.AnTuTuBenchmark} onChange={handleData} required/></label>
                            <label>Battery<input type="number" ref={batteryRef} value={product.features.battery} onChange={handleData} required/></label>
                            <label>Screen Size<input type="text" ref={screenSizeRef} value={product.features.screen.size} onChange={handleData} required/></label>
                            <label>Screen Type<input type="text" ref={screenTypeRef} value={product.features.screen.type} onChange={handleData} required/></label>
                            <label>Screen Resolution<input type="text" ref={screenResolutionRef} value={product.features.screen.resolution} onChange={handleData} required/></label>
                            <label>Charging Type<input type="text" ref={chargingTypeRef} value={product.features.charging.type} onChange={handleData} required/></label>
                            <label>Charging Wattage<input type="number" ref={chargingWattageRef} value={product.features.charging.wattage} onChange={handleData} required/></label>
                            <label>Main Camera<input type="number" ref={mainCameraRef} value={product.features.camera.mainCamera} onChange={handleData} required/></label>
                            <label>Front Camera<input type="number" ref={frontCameraRef} value={product.features.camera.frontCamera} onChange={handleData} required/></label>
                            <label className="container" onClick={change5G}>5G
                                <input type="checkbox" name="5g" checked={product.features.fiveG ? true : false}/>
                            </label>
                            {
                                product.colors.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <h2>Color Block</h2>
                                            <label>Name <input type="text" name={`name${index}`} value={item.name} required onChange={handleColorData}/></label>
                                            <label>ColorCode <input type="text" name={`colorCode${index}`} value={item.colorCode} required onChange={handleColorData}/></label>
                                            <label>Stock <input type="number" name={`stock${index}`} value={item.stock} required onChange={handleColorData}/></label>
                                        </div>
                                    )
                                })
                            }
                            {
                                success && <Alert variant="success">Updated!</Alert>
                            }
                            <button className="btn btn-secondary">Update</button>
                        </form> : <div className="section">Loading...</div>
                    }
                </div>
            </div>
        </>
    )
}
