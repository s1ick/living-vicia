import React from 'react'
import Header from '../components/header/header'
import SettingsPanel from '../components/settingsPanel/settings-panel'
import Sidebar from '../components/sildebar/sidebar'
import Content from '../components/content/content'
const defaultState = {
    filters: {
        chips: []
    }
}
export const MarketplaceContext = React.createContext(defaultState)


function Marketplace() {
    const onChipsChange = (chip) => {
        setfilterState((filterState) => {
            const indexState = filterState.filters.chips.indexOf(chip)

            if (indexState === -1) {

                return {
                    ...filterState,
                    filters: {
                        ...filterState.filters,
                        chips: [...filterState.filters.chips, chip]
                    }
                }

            }
            else {
                return {
                    ...filterState,
                    filters: {
                        ...filterState.filters,
                        chips: filterState.filters.chips.toSpliced(indexState, 1)
                    }
                }
            }
        })
    }

    const [filterState, setfilterState] = React.useState(defaultState);

    return (
        <MarketplaceContext.Provider value={{ filters: filterState, onChipsChange }}>
            <div>
                <Header />
                <SettingsPanel />
                <div className={'wrapper'}>
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </MarketplaceContext.Provider>
    )
}

export default Marketplace
