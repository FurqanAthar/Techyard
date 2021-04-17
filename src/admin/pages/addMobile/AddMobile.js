import React from 'react'
import {Alert} from 'react-bootstrap'
import {storage} from '../../../firebase'
import {addMobileContext} from '../../context/AddMobileContext'

export default function AddMobile() {
    const [confirmColorCount, setConfirmColorCount] = React.useState(0)
    const [confirmColorData, setConfirmColorData] = React.useState([])
    const {addMobile} = React.useContext(addMobileContext)
    const [showForm, setShowForm] = React.useState(false)
    const [fiveG, setFiveG] = React.useState(false)
    const [rand, setRand] = React.useState([])
    const screenResolutionRef = React.useRef()
    const chargingWattageRef = React.useRef()
    const antutuBenchmarkRef = React.useRef()
    const chargingTypeRef = React.useRef()
    const frontCameraRef = React.useRef()
    const descriptionRef = React.useRef()
    const screenTypeRef = React.useRef()
    const screenSizeRef = React.useRef()
    const mainCameraRef = React.useRef()
    const colorCountRef = React.useRef()
    const processorRef = React.useRef()
    const batteryRef = React.useRef()
    const modelRef = React.useRef()
    const priceRef = React.useRef()
    const brandRef = React.useRef()
    const ramRef = React.useRef()
    const romRef = React.useRef()
    const gpuRef = React.useRef()
    let colorCount = 0
    let colorData = []
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
 
        var dataObject = {
            model : modelRef.current.value,
            description : descriptionRef.current.value,
            price : parseInt(priceRef.current.value),
            brand : brandRef.current.value,
            features: {
                rom : parseInt(romRef.current.value),
                ram : parseInt(ramRef.current.value),
                screen: {
                    size : parseFloat(screenSizeRef.current.value),
                    type : screenTypeRef.current.value,
                    resolution : screenResolutionRef.current.value
                },
                battery : parseInt(batteryRef.current.value),
                charging : {
                    type : chargingTypeRef.current.value,
                    wattage: parseInt(chargingWattageRef.current.value)
                },
                processor : processorRef.current.value,
                camera : {
                    mainCamera: parseInt(mainCameraRef.current.value),
                    frontCamera: parseInt(frontCameraRef.current.value)
                },
                gpu : gpuRef.current.value,
                fiveG: fiveG,
                AnTuTuBenchmark: parseInt(antutuBenchmarkRef.current.value)
            },
            colors: []
        }
        addMobile(dataObject, confirmColorData).then(() => console.log(`success`))
    }
    
    const handleColor = async () => {
        colorCount = parseInt(colorCountRef.current.value)
        setConfirmColorCount(colorCount)
        await addRand(colorCount)
    }
    
    const addRand = (n) => {
        for (var i=0; i<n; i++) {
            rand.push("+")
            setRand([...rand])
        }
        setShowForm(true)
    }
    
    const handleColorData = (e) => {
        for (let i=0; i<confirmColorCount; i++) {
            if (e.target.name.charAt(e.target.name.length - 1) == i) {
                if (e.target.name.split(i)[0] === `stock`) {
                    colorData[i] = {...confirmColorData[i], [e.target.name.split(i)[0]]:parseInt(e.target.value)}
                }
                else if(e.target.name.split(i)[0] === `image`) {
                    colorData[i] = {...confirmColorData[i], [e.target.name.split(i)[0]]:e.target.files[0]}
                }
                else {
                    colorData[i] = {...confirmColorData[i], [e.target.name.split(i)[0]]:e.target.value}
                }
            }
            else {
                colorData[i] = confirmColorData[i]
            }
        }
        setConfirmColorData([...colorData])
        // console.log(colorData)
    }
    const change5G = () => {
        if (fiveG === true) {
            setFiveG(false)
        }
        else {
            setFiveG(true)
        }
    }

    return (
        <div className="signup section">
            <div className="addproduct-container">
                {
                    !showForm && <div>How many colors do you want to add? <input type="number" onChange={handleColor} min={1} ref={colorCountRef} required/></div>
                }
                {
                    showForm && (
                        <form onSubmit={handleSubmit}>
                            <label>Model <input type="text" ref={modelRef} required/></label>
                            <label>Description <input type="text" ref={descriptionRef} required/></label>
                            <label>Price <input type="number" ref={priceRef} required/></label>
                            <label>Brand <input type="text" ref={brandRef} required/></label>
                            <label>RAM <input type="number" ref={ramRef} required/></label>
                            <label>ROM <input type="number" ref={romRef} required/></label>
                            <label>Processor<input type="text" ref={processorRef} required/></label>
                            <label>GPU<input type="text" ref={gpuRef} required/></label>
                            <label>AnTuTu Benchmark<input type="number" ref={antutuBenchmarkRef} required/></label>
                            <label>Battery<input type="number" ref={batteryRef} required/></label>
                            <label>Screen Size<input type="text" ref={screenSizeRef} required/></label>
                            <label>Screen Type<input type="text" ref={screenTypeRef} required/></label>
                            <label>Screen Resolution<input type="text" ref={screenResolutionRef} required/></label>
                            <label>Charging Type<input type="text" ref={chargingTypeRef} required/></label>
                            <label>Charging Wattage<input type="number" ref={chargingWattageRef} required/></label>
                            <label>Main Camera<input type="number" ref={mainCameraRef} required/></label>
                            <label>Front Camera<input type="number" ref={frontCameraRef} required/></label>
                            <label className="container" onClick={change5G}>5G
                                <input type="checkbox" name="5g"/>
                            </label>
                            {
                                rand.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <h2>Color Block</h2>
                                            <label>Name <input type="text" name={`name${index}`} required onChange={handleColorData}/></label>
                                            <label>ColorCode <input type="text" name={`colorCode${index}`} required onChange={handleColorData}/></label>
                                            <label>Stock <input type="number" name={`stock${index}`} required onChange={handleColorData}/></label>
                                            <label>Image Upload <input type="file" name={`image${index}`} accept="image/*" required onChange={handleColorData}/></label>
                                        </div>
                                    )
                                })
                            }
                            <button className="btn btn-secondary">Add Product</button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}
