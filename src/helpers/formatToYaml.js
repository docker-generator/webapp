import YAML from 'yaml'

function removeEmpty(obj) {
    const res = {}

    Object.keys(obj).forEach(key => {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '' && obj[key].length > 0 && key !== 'id' && key !== 'name') res[key] = obj[key]
    })

    return res
}

export default function formatToYaml(_data) {
    const masterKeys = ['services', 'networks']
    const template = {
        version: '3.0',
    }

    const d = JSON.stringify(_data)
    const data = JSON.parse(d)

    for (let m = 0; m < masterKeys.length; m++) {
        const mkey = masterKeys[m]
        
        for (let i = 0; i < data[mkey].length; i++) {
            const service = data[mkey][i]
    
            for (const [key, value] of Object.entries(service)) {
                if (typeof value === 'object' && value.length > 0) {
                    for (let j = 0; j < value.length; j++) {
                        if (key === 'ports') {
                            data[mkey][i][key][j] = `"${value[j]}"`
                        }
                    }
                }
            }
        }
    }

    if (data.services.length > 0) {
        const services = {}
        data.services.map(service => {
            if (service.name !== '') {
                const s = removeEmpty(service)
                const arr = {}
                Object.keys(s).map(key => arr[key] = s[key])
                services[service.name] = { ...arr }
            }
        })

        if (Object.keys(services).length > 0) template.services = services
    }

    if (data.networks.length > 0) {
        const networks = []
        data.networks.map(network => {
            if (network.content !== '') networks.push(network.content)
        })

        if (networks.length > 0 && networks[0]?.length > 0) template.networks = networks
    }

    return YAML.stringify(template).replaceAll(`'"`, '"').replaceAll(`"'`, `"`)
}