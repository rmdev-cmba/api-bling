import { FC, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import s from './Searchbar.module.css'

interface Props {
  className?: string
  id?: string
}

const Searchbar: FC<Props> = ({ className, id = 'search' }) => {
  const router = useRouter()
  const [searchCodigo, setSearchCodigo] = useState('')
  
  // useEffect(() => {
  //   router.prefetch('/prod')
  // }, [])


  return (

    <div
      className={cn(
        'relative text-sm bg-accents-1 text-base w-full transition-colors duration-150',
        className
      )}
    >
      <label className="hidden" htmlFor={id}>
        Search
        </label>
      <input
        id={id}
        className={s.input}
        // className="form-control"
        placeholder="Digite o código......"
        defaultValue={router.query.q}
        // value={searchCodigo}
        onChange={e => setSearchCodigo(e.currentTarget.value)}
        onKeyUp={(e) => {
          e.preventDefault()

          if (e.key === 'Enter') {
            const q = e.currentTarget.value
            if (q == '' || q.length < 4) {
              alert('Não pode ser vazio ou digite 4 dígitos')

            } else {
              setSearchCodigo(q)
              router.push(`/prod/${searchCodigo}`)
            }
            return;
            
          }
        }}
      />

      <div className={s.iconContainer}>
        <svg className={s.icon} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Searchbar
