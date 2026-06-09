import { useEffect, useState } from 'react'
import ProdutoCard from '../components/ProdutoCard'
import ProdutoForm from '../components/ProdutoForm'

export default function Catalogo() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dadosMockados = [
      {
        id: 1,
        nome: 'MacBook Neo',
        preco: 8500,
        descricao:
          'Excelente notebook para quem estuda e ja trabalha com programacao.',
        imagem:
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 2,
        nome: 'Kindle 7a Geracao',
        preco: 250,
        descricao:
          'Leitor digital com firmware atualizado. Bateria de longa duracao para leituras criticas.',
        imagem:
          'https://images.unsplash.com/photo-1592496001020-d31bd830651f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 3,
        nome: 'Kit Reparo Carburador CG Fan 125 KS',
        preco: 85.5,
        descricao:
          'Kit completo de reparo e limpeza. Essencial para quem gosta de fazer a propria manutencao em casa.',
        imagem:
          'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      },
    ]

    const timer = setTimeout(() => {
      setProdutos(dadosMockados)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const adicionarProduto = (novoProduto) => {
    setProdutos((produtosAtuais) => [novoProduto, ...produtosAtuais])
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent">
          Catalogo Dinamico
        </h1>
        <p className="mt-2 text-slate-400">
          Gerenciamento de produtos com React e Tailwind
        </p>
      </header>

      <ProdutoForm aoAdicionarProduto={adicionarProduto} />

      <section>
        <h2 className="mb-6 border-b border-slate-700 pb-2 text-2xl font-bold text-white">
          Produtos Disponiveis
        </h2>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-600 border-t-emerald-500" />
            <p className="animate-pulse font-medium text-slate-400">
              Buscando dados na API...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                imagem={produto.imagem}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
