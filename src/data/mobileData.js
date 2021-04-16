import a52black from '../assets/product images/mobile/a52black.png'
import a52blue from '../assets/product images/mobile/a52blue.png'
import f3black from '../assets/product images/mobile/f3black.png'
import f3blue from '../assets/product images/mobile/f3blue.png'
import mi10tblack from '../assets/product images/mobile/mi10tblack.png'
import mi10tsilver from '../assets/product images/mobile/mi10tsilver.png'
import note20black from '../assets/product images/mobile/note20black.png'
import note20bronze from '../assets/product images/mobile/note20bronze.png'
import renoblack from '../assets/product images/mobile/renoblack.png'
import renosilver from '../assets/product images/mobile/renosilver.png'
import s9blue from '../assets/product images/mobile/s9blue.png'
import s9black from '../assets/product images/mobile/s9black.png'
import s21gray from '../assets/product images/mobile/s21gray.png'
import s21white from '../assets/product images/mobile/s21white.png'
import s21violet from '../assets/product images/mobile/s21violet.png'
import v20blue from '../assets/product images/mobile/v20blue.png'
import v20black from '../assets/product images/mobile/v20black.png'
import x3black from '../assets/product images/mobile/x3black.png'
import x3blue from '../assets/product images/mobile/x3blue.png'
import x60black from '../assets/product images/mobile/x60black.png'
import x60blue from '../assets/product images/mobile/x60blue.png'
import y7ablack from '../assets/product images/mobile/y7ablack.png'
import y7agold from '../assets/product images/mobile/y7agold.png'
import y51scrystal from '../assets/product images/mobile/y51scrystal.png'
import y51stitanium from '../assets/product images/mobile/y51stitanium.png'


export default [
    {
        id: 1,
        model: "Galaxy S9",
        description: "The camera, reimagined. Galaxy S9 introduced the revolutionary Dual Aperture phone camera that adapts to light like the human eye.",
        price: 91000,
        brand: 'Samsung',
        features: {
            ram: 4,
            rom: 128,
            screen: {
            	size: 5.8,
            	type: 'Super AMOLED',
            	resolution: '1440x2960'
            },
            battery: 3000,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'Exynos 9810 Octa',
            camera: {
                mainCamera: 12,
                frontCamera: 12
            },
            gpu: 'Helios G80',
            fiveG: true,
            AnTuTuBenchmark: 100000
        },
        colors: [
            {	name: 'Midnight Black',
                colorCode: '#000',
                image: s9black,
                stock: 0
            },
            {
            	name: 'Coral Blue',
                colorCode: '#130f61',
                image: s9blue,
                stock: 5
            }
        ]
    },
    {
        id: 2,
        model: "Galaxy A52",
        description: "Samsung will bring another smartphone Galaxy A52. The specs of the smartphone seem to be on the high and will be one of the high-end smartphones of the company with outstanding features.",
        price: 57999,
        brand: 'Samsung',
        features: {
            ram: 8,
            rom: 128,
            screen: {
            	size: 6.5,
            	type: 'Super AMOLED',
            	resolution: '1080x2400'
            },
            battery: 4500,
            charging: {
                type: 'C',
                wattage: 25
            },
            processor: 'Snapdragon 720G ',
            camera: {
                mainCamera: 64,
                frontCamera: 32
            },
            gpu: 'Adreno 618',
            fiveG: false,
            AnTuTuBenchmark: 100000
        },
        colors: [
            {	name: 'Awesome Black',
                colorCode: '#000',
                image: a52black,
                stock: 10
            },
            {
            	name: 'Awesome Blue',
                colorCode: '#130f61',
                image: a52blue,
                stock: 5
            }
        ]
    },
    {
        id: 3,
        model: "Poco F3",
        description: "Xiaomi will introduce a new Poco F3 smartphone which will have an 8GB variant. The company's true successor to the POCO F1 never arose in POCOâ€™s lineup last year.",
        price: 65999,
        brand: 'Xiaomi',
        features: {
            ram: 8,
            rom: 256,
            screen: {
            	size: 6.6,
            	type: 'AMOLED',
            	resolution: '0180 x 2400'
            },
            battery: 4520,
            charging: {
                type: 'C',
                wattage: 12
            },
            processor: 'Snapdragon 870',
            camera: {
                mainCamera: 48,
                frontCamera: 20
            },
            gpu: 'Adreno 650',
            fiveG: true,
            AnTuTuBenchmark: 112231
        },
        colors: [
            {	name: 'Night Black',
                colorCode: '#000',
                image: f3black,
                stock: 5
            },
            {
            	name: 'Deep Ocean Blue',
                colorCode: '#130f61',
                image: f3blue,
                stock: 5
            }
        ]
    },
    {
        id: 4,
        model: "V20 SE",
        description: "Vivo coming with its new V20 SE, the new smartphone of the new series with some quality specs to capture the market and attract the attention of the users.",
        price: 45999,
        brand: 'Vivo',
        features: {
            ram: 8,
            rom: 128,
            screen: {
            	size: 6.4,
            	type: 'AMOLED',
            	resolution: '1080x2400'
            },
            battery: 4100,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'Snapdragon 665 (11 nm)',
            camera: {
                mainCamera: 48,
                frontCamera: 32
            },
            gpu: 'Adreno 610 ',
            fiveG: false,
            AnTuTuBenchmark: 132043
        },
        colors: [
            {	name: 'Gravity Black',
                colorCode: '#000',
                image: v20black,
                stock: 5
            },
            {
            	name: 'Oxygen Blue',
                colorCode: '#130f61',
                image: v20blue,
                stock: 5
            }
        ]
    },
    {
        id: 5,
        model: "Y51s",
        description: "The new Vivo Y51s is powered by the latest chipset that is called Snapdragon 662 chipset. This is a powerful chipset that runs mid-range handsets",
        price: 39999,
        brand: 'Vivo',
        features: {
            ram: 8,
            rom: 128,
            screen: {
            	size: 6.6,
            	type: 'IPS LCD',
            	resolution: '1080x2400'
            },
            battery: 5000,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'Snapdragon 662',
            camera: {
                mainCamera: 48,
                frontCamera: 16 
            },
            gpu: 'Adreno 610',
            fiveG: false,
            AnTuTuBenchmark: 143205
        },
        colors: [
            {	name: 'Crystal Symphony',
                colorCode: '#a7bac4',
                image: y51scrystal,
                stock: 5
            },
            {
            	name: 'Titanium Sapphire',
                colorCode: '#13195e',
                image: y51stitanium,
                stock: 5
            }
        ]
    },
    {
        id: 6,
        model: "Poco X3 Pro",
        description: "Xiaomi will unveil the new Poco X3 which will be the new Pro variant smartphone. The company has confirmed that they are working on a device halfway between the POCO X3 NFC and the POCO F2 Pro.",
        price: 39999,
        brand: 'Xiaomi',
        features: {
            ram: 6,
            rom: 128,
            screen: {
            	size: 6.67,
            	type: 'IPS LCD',
            	resolution: '1080x2400'
            },
            battery: 5160,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'Snapdragon 860 (7 nm)',
            camera: {
                mainCamera: 48,
                frontCamera: 20
            },
            gpu: 'Adreno 640',
            fiveG: false,
            AnTuTuBenchmark: 123023
        },
        colors: [
            {	name: 'Phantom Black',
                colorCode: '#000',
                image: x3black,
                stock: 5
            },
            {
            	name: 'Frost Blue',
                colorCode: '#130f61',
                image: x3blue,
                stock: 5
            }
        ]
    },
    {
        id: 7,
        model: "Reno 5 Pro",
        description: "Oppo is going to unveil Reno 5 that is coming with a moniker Pro at the end. We have already seen 4-series of the company with some amazing specs qualities.",
        price: 104999,
        brand: 'Oppo',
        features: {
            ram: 12,
            rom: 256,
            screen: {
            	size: 6.5,
            	type: 'Super AMOLED',
            	resolution: '1080x2400'
            },
            battery: 4350,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'MT6889Z Dimensity 1000+ (7nm)',
            camera: {
                mainCamera: 12,
                frontCamera: 12
            },
            gpu: 'Mali-G77 MC9',
            fiveG: true,
            AnTuTuBenchmark: 156473
        },
        colors: [
            {	name: 'Starry Black',
                colorCode: '#000',
                image: renoblack,
                stock: 5
            },
            {
            	name: 'Galactic Silver',
                colorCode: '#aecfe8',
                image: renosilver,
                stock: 5
            }
        ]
    },
    {
        id: 8,
        model: "Galaxy S21",
        description: "Samsung Galaxy S21 - A Flagship With USC technology! Samsung's latest news about the Galaxy S21 has been shared by the company on their Twitter account saying that the upcoming smartphone of the company that is called Samsung Galaxy S21 will be equipped with USC technology.",
        price: 169999,
        brand: 'Samsung',
        features: {
            ram: 8,
            rom: 256,
            screen: {
            	size: 6.2,
            	type: 'Dynamic AMOLED',
            	resolution: '1080x2400'
            },
            battery: 4000,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'Exynos 2100 (5 nm)',
            camera: {
                mainCamera: 12,
                frontCamera: 10
            },
            gpu: 'Mali-G78 MP14',
            fiveG: true,
            AnTuTuBenchmark: 185934
        },
        colors: [
            {	name: 'Phantom Gray',
                colorCode: '#4f4f4f',
                image: s21gray,
                stock: 5
            },
            {	name: 'Phantom Violet',
                colorCode: '#b8a9cf',
                image: s21violet,
                stock: 5
            },
            {
            	name: 'Phantom White',
                colorCode: '#e3e3e3',
                image: s21white,
                stock: 5
            }
        ]
    },
    {
        id: 9,
        model: "Y7a",
        description: "Chinese manufacturer Huawei has announced the Y7a smartphone in the market. The company unveiled its latest addition in the Huawei Y series. This all-new handset is Known for its combination of stylish design and basic value-for-money innovations.",
        price: 35999,
        brand: 'Huawei',
        features: {
            ram: 4,
            rom: 128,
            screen: {
            	size: 6.7,
            	type: 'IPS LCD',
            	resolution: '1440x2960'
            },
            battery: 5000,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'Kirin 710A (14 nm)',
            camera: {
                mainCamera: 48,
                frontCamera: 8
            },
            gpu: 'Mali-G51 MP4',
            fiveG: false,
            AnTuTuBenchmark: 112039
        },
        colors: [
            {	name: 'Midnight Black',
                colorCode: '#000',
                image: y7ablack,
                stock: 5
            },
            {
            	name: 'Brush Gold',
                colorCode: '#f0ded5',
                image: y7agold,
                stock: 5
            }
        ]
    },
    {
        id: 10,
        model: "Mi 10T",
        description: "Xiaomi has unveiled its upcoming Mi 10T that will be launched with 6GB variant. The Mi 10T series is a great option for those who are looking for an affordable flagship smartphone.",
        price: 62999,
        brand: 'Xiaomi',
        features: {
            ram: 6,
            rom: 128,
            screen: {
            	size: 6.7,
            	type: 'IPS LCD',
            	resolution: '1080x2340'
            },
            battery: 3000,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'SM8250 Snapdragon 865 (7 nm+)',
            camera: {
                mainCamera: 64,
                frontCamera: 20
            },
            gpu: 'Adreno 650',
            fiveG: true,
            AnTuTuBenchmark: 153204
        },
        colors: [
            {	name: 'Black',
                colorCode: '#000',
                image: mi10tblack,
                stock: 5
            },
            {
            	name: 'Silver',
                colorCode: '#999999',
                image: mi10tsilver,
                stock: 5
            }
        ]
    },
    {
        id: 11,
        model: "Galaxy Note 20 Ultra",
        description: "Xiaomi has unveiled its upcoming Mi 10T that will be launched with 6GB variant. The Mi 10T series is a great option for those who are looking for an affordable flagship smartphone.",
        price: 219999,
        brand: 'Samsung',
        features: {
            ram: 8,
            rom: 256,
            screen: {
            	size: 6.9,
            	type: 'Dynamic AMOLED',
            	resolution: '1440x3088'
            },
            battery: 4500,
            charging: {
                type: 'C',
                wattage: 17
            },
            processor: 'Exynos 990 (7 nm+)',
            camera: {
                mainCamera: 108,
                frontCamera: 10
            },
            gpu: 'Mali-G77 MP11',
            fiveG: false,
            AnTuTuBenchmark: 196835
        },
        colors: [
            {	name: 'Mystic Black',
                colorCode: '#000',
                image: note20black,
                stock: 5
            },
            {
            	name: 'Mystic Bronze',
                colorCode: '#ab9587',
                image: note20bronze,
                stock: 5
            }
        ]
    },
    {
        id: 12,
        model: "X60 Pro",
        description: "Vivo X60 Pro's going to be powered by Snapdragon 870 5G (7 nm) chipset. It is considered one of the powerful chipsets that are used for flagship smartphones and their performance is very satisfactory.",
        price: 129999,
        brand: 'Vivo',
        features: {
            ram: 12,
            rom: 256,
            screen: {
            	size: 6.6,
            	type: 'AMOLED',
            	resolution: '1440x2960'
            },
            battery: 3000,
            charging: {
                type: 'C',
                wattage: 15
            },
            processor: 'Snapdragon 870 5G (7 nm)',
            camera: {
                mainCamera: 48,
                frontCamera: 32
            },
            gpu: 'Adreno 650',
            fiveG: true,
            AnTuTuBenchmark: 175432
        },
        colors: [
            {	name: 'Black',
                colorCode: '#000',
                image: x60black,
                stock: 5
            },
            {
            	name: 'Blue',
                colorCode: '#130f61',
                image: x60blue,
                stock: 5
            }
        ]
    }
]