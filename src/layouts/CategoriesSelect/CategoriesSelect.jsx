import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
]

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

export default function CategoriesSelect({ onChange, data }) {
    const theme = useTheme()
    const [personName, setPersonName] = React.useState([])

    return (
        <div>
            <FormControl
                sx={{
                    m: 1,
                    width: 300,
                    mt: 3,
                    '& .MuiInputBase-root': { backgroundColor: '#E7ECF3' },
                }}
            >
                <Select
                    displayEmpty
                    value={personName}
                    onChange={onChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return (
                                <em className='font-semibold text-primary'>Select an category</em>
                            )
                        }

                        return selected.join(', ')
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value=''>
                        <em>Select an category...</em>
                    </MenuItem>
                    {data.map((name) => (
                        <MenuItem
                            key={name.id}
                            value={name.id}
                            style={getStyles(name.name, personName, theme)}
                        >
                            {name.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
