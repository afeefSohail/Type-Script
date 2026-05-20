import type { Tea } from "../types"
import { TeaCard } from "./TeaCard"


interface TeaListProp {
    items: Tea[]
}

export function TeaList({items}: TeaListProp) {
    return (
        <div>
            {items.map((tea) => (
                <TeaCard 
                key={tea.id}
                name={tea.name}
                price={tea.price}
                isSpecial={tea.price > 30}
                />
            ))}
        </div>
    )
} 

export default TeaList