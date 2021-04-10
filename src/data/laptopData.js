import da2871nia from '../assets/product images/laptops/da2871nia.png'
import e15 from '../assets/product images/laptops/e15.png'
import g7 from '../assets/product images/laptops/g7.png'
import x2 from '../assets/product images/laptops/x2.png'
import x360 from '../assets/product images/laptops/x360.png'
import vostro from '../assets/product images/laptops/vostro.png'
import slim7 from '../assets/product images/laptops/slim7.png'
import latitude14 from '../assets/product images/laptops/latitude14.png'
import inspiron15 from '../assets/product images/laptops/inspiron15.png'
import insprion14 from '../assets/product images/laptops/insprion14.png'
import gaming15 from '../assets/product images/laptops/gaming15.png'


export default [
    {
        id: 1,
        stock: 10,
        model: "Vostro 15 3500",
        description: "Dell Vostro 15 3500 - Tiger Lake - 11th Gen Core i5 08GB 01-TB HDD Intel IRIS Xe Graphics 15.6\" Full HD 1080p Display TPM",
        price: 104999,
        brand: 'Dell',
        features: {
            ram: "8GB, 8Gx1, DDR4, 2666MHz",
            hdd: "01 TeraByte HDD",
            ssd: "None",
            screen: {
                size: 15.6,
                resolution: '1920X1080'
            },
            processor: {
                type: '11th Generation Intel Core i5 1135G7',
                speed: '2.4 GHz Turbo Boost 4.2 GHz (4 Cores - 8 Threads)'
            },
            gpu: 'Intel(R) Iris(R) Xe Graphics',
            touchscreen: false,
            image: ,
            backlit: false
        }

    },
    {
        id: 2,
        stock: 10,
        model: "15 DA2871nia",
        description: "HP 15 DA2871nia Comet Lake - 10th Gen Core i5 08GB to 32GB 1-TB HDD + Optional SSD 15.6\" HD 720p Touchscreen MicroEdge BV LED Win 10 (Black)",
        price: 104999,
        brand: 'HP',
        features: {
            ram: "08 GB DDR4-2666 SDRAM",
            hdd: "1 TB 5400 rpm",
            ssd: "None",
            screen: {
                size: 15.6,
                resolution: '1366X768'
            },
            processor: {
                type: '10th Generation Core i5-10210u',
                speed: '1.6 GHz Turbo Boost 4.2 GHz (6 MB Cache)'
            },
            gpu: 'Intel 620 UHD',
            touchscreen: false,
            image: ,
            backlit: true
        }

    },
    {
        id: 3,
        stock: 10,
        model: "ThinkPad E15",
        description: "Lenovo ThinkPad E15 - Comet Lake - 10th Gen Core i5 QuadCore 04GB 1-TB HDD 15.6\" Full HD 1080p Display FP Reader TPM 2.0 Dolby Audio (With Lenovo Bag, Black)",
        price: 108999,
        brand: 'Lenovo',
        features: {
            ram: "04 GB DDR4",
            hdd: "1 TB 5400 rpm",
            ssd: "None",
            screen: {
                size: 15.6,
                resolution: '1920X1080'
            },
            processor: {
                type: '10th Generation Core i5-10210U',
                speed: '1.6 GHz Turbo Boost 4.2 GHz (6 MB Cache)'
            },
            gpu: 'Intel UHD 620',
            touchscreen: false,
            image: ,
            backlit: true
        }

    },
    {
        id: 4,
        stock: 10,
        model: "Elite x2 G4",
        description: "HP Elite x2 G4 - Whiskey Lake - 8th Gen Core i5 QuadCore 08GB 256GB SSD 12.3\" Full HD 1080p WUXGA IPS eDP & PSR Touchscreen With HP SureView Privacy Screen Backlit KB FP Reader B&O Play Dual Cameras ThunderBolt",
        price: 105000,
        brand: 'HP',
        features: {
            ram: "8 GB LPDDR3-2133 SDRAM",
            hdd: "None",
            ssd: "256 GB SSD",
            screen: {
                size: 13.0,
                resolution: '1920x1080'
            },
            processor: {
                type: '8th Generation Core i5-8265u',
                speed: '1.6 GHz Turbo Boost 3.9 (6 MB Cache)'
            },
            gpu: 'Intel UHD Graphics 620',
            touchscreen: true,
            image: ,
            backlit: true
        }

    },
    {
        id: 5,
        stock: 10,
        model: "Inspiron 15 7000",
        description: "ell Inspiron 15 7000 2 in 1 Ice Lake - 10th Gen Core i5 08GB 256GB SSD 15.6\" Full HD 1080p Touchscreen Convertible Display Backlit KB FP Reader",
        price: 120000,
        brand: 'Dell',
        features: {
            ram: "08 GB 3200 MHz DDR4",
            hdd: "None",
            ssd: "256 GB NVME SSD",
            screen: {
                size: 15.6,
                resolution: '1920x1080'
            },
            processor: {
                type: '10th Generation Core i5-1035G1',
                speed: '1.0 GHz Turbo Boost 3.6 GHz (6 MB Cache)'
            },
            gpu: 'Intel UHD Graphics',
            touchscreen: true,
            image: ,
            backlit: true
        }

    },
    {
        id: 6,
        stock: 10,
        model: "Yoga Slim 7",
        description: "Lenovo Yoga Slim 7 15 x360 - Tiger Lake - 11th Gen Core i5 08GB 256GB SSD Intel IRIS-Xe Graphics 15.6\" FHD IPS Touchscreen Convertible Display Dolby Atmos Sound Backlit KB FP Reader ThunderBolt-4 W10 (Slate Grey)",
        price: 128999,
        brand: 'Lenovo',
        features: {
            ram: "8GB Soldered DDR4-3200",
            hdd: "None",
            ssd: "256GB SSD M.2 2242 PCIe 3.0x4 NVMe",
            screen: {
                size: 15.6,
                resolution: '1920x1080'
            },
            processor: {
                type: '11th Generation Intel Core i5 1135G7',
                speed: '2.4 GHz Turbo Boost 4.2 GHz (4 Cores - 8 Threads)'
            },
            gpu: 'Integrated Intel Iris Xe Graphics',
            touchscreen: true,
            image: ,
            backlit: true
        }

    },
    {
        id: 7,
        stock: 10,
        model: "Inspiron 14 5406",
        description: "Dell Inspiron 14 5406 2 in 1 - Tiger Lake - 11th Gen Core i5 QuadCore 08GB 256GB SSD 14\" HD 720 Convertible Touchscreen Backlit KB FP Reader W10 Pro (Dune)",
        price: 130000,
        brand: 'Dell',
        features: {
            ram: "8GB, 1x8GB, DDR4, 3200MHz",
            hdd: "None",
            ssd: "256GB M.2 PCIe NVMe Solid State Drive",
            screen: {
                size: 14,
                resolution: '1366x768'
            },
            processor: {
                type: '11th Generation Intel Core i5 1135G7',
                speed: '2.4 GHz Turbo Boost 4.2 GHz (4 Cores - 8 Threads)'
            },
            gpu: 'Integrated Intel Iris Xe Graphics',
            touchscreen: false,
            image: ,
            backlit: true
        }

    },
    {
        id: 8,
        stock: 10,
        model: "Pavilion Gaming 15",
        description: "HP Pavilion Gaming 15 DK0056wm / DK0096wm - 9th Gen Ci5 QuadCore 08GB to 32GB 256GB to 1-TB SSD + Optional HDD 4-GB NVIDIA GeForce GTX1650 GDDR5 15.6\" Full HD IPS MicroEdge LED Backlit KB B&O Play W10 (Customize, Shadow Black - Acid Green)",
        price:  131900,
        brand: 'HP',
        features: {
            ram: "08 GB DDR4-2666 SDRAM",
            hdd: "None",
            ssd: "256 GB PCIe NVMe M.2 SSD",
            screen: {
                size: 15.6,
                resolution: '1920x1080'
            },
            processor: {
                type: '9th Gen Intel Ci5-9300H QuadCore',
                speed: '2.4 GHz base frequency, up to 4.1 GHz (8-MB Cache)'
            },
            gpu: 'NVIDIA GeForce GTX 1650 (4 GB GDDR5)',
            touchscreen: false,
            image: ,
            backlit: true
        }

    },
    {
        id: 9,
        stock: 10,
        model: "ENVY x360",
        description: "HP ENVY x360 - 15 DS0000AU - AMD Ryzen-5 QuadCore 08GB 512GB SSD AMD Radeon RX Vega 8 Graphics 15.6\" Full HD IPS MicroEdge Convertible Touchscreen Display Backlit KB B&O Play FPR Webcam Kill Switch (Nightfall Black)",
        price: 135000,
        brand: 'HP',
        features: {
            ram: "08 GB DDR4",
            hdd: "None",
            ssd: "512 GB PCIe NVMe M.2 SSD",
            screen: {
                size: 15.6,
                resolution: '1920x1080'
            },
            processor: {
                type: 'AMD Ryzen 5 3500U',
                speed: '2.1 GHz base clock, up to 3.7 GHz max boost clock, 6 MB cache, 4 cores'
            },
            gpu: 'AMD Radeon Vega 8 Graphics',
            touchscreen: false,
            image: ,
            backlit: true
        }

    },
    {
        id: 10,
        stock: 10,
        model: "EliteBook 850 G7",
        description: "HP EliteBook 850 G7 Comet Lake - 10th Gen Core i5 08GB 512GB SSD 15.6\" Full HD AG LED Backlit KB FP Reader (HP Business Backpack - Silver)",
        price: 141900,
        brand: 'HP',
        features: {
            ram: "08 GB (2) SODIMMs",
            hdd: "None",
            ssd: "512 GB PCIe NVMe Value SSD",
            screen: {
                size: 15.6,
                resolution: '1920x1080'
            },
            processor: {
                type: '10th Generation Core i5-10210u',
                speed: '1.6 GHz Turbo Boost 4.2 GHz (6 MB Cache)'
            },
            gpu: 'Intel UHD Graphics',
            touchscreen: false,
            image: ,
            backlit: true
        }

    },
    {
        id: 11,
        stock: 10,
        model: "Latitude 14 3410",
        description: "Dell Latitude 14 3410 Comet Lake - 10th Gen Core i7 QuadCore 08GB to 32GB 1-TB HDD + Optional SSD 2-GB NVIDIA GeForce MX230 GDDR5 14\" Full HD 1080p LED Backlit KB FP Reader",
        price: 142500,
        brand: 'Dell',
        features: {
            ram: "08 GB DDR4",
            hdd: "01 TB HDD 5400 RPM",
            ssd: "None",
            screen: {
                size: 14,
                resolution: '1920x1200'
            },
            processor: {
                type: '10th Generation Core i7-10510U',
                speed: '1.8 GHz Turbo Boost 4.9 GHz (8 MB Cache)'
            }, 
            gpu: 'NVIDIA GEFORCE MX230 W/2GB GDDR5',
            touchscreen: false,
            image: ,
            backlit: true
        }
    }
]