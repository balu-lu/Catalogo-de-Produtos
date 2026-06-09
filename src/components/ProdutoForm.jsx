import { useState } from 'react'

export default function ProdutoForm({ aoAdicionarProduto }) {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: Number.parseFloat(preco),
      descricao,
      imagem: imagem || 'https://via.placeholder.com/400x300?text=Novo+Produto',
    }

    aoAdicionarProduto(novoProduto)

    setNome('')
    setPreco('')
    setDescricao('')
    setImagem('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-md"
    >
      <h2 className="mb-6 border-b border-slate-700 pb-2 text-2xl font-bold text-white">
        Cadastrar Novo Produto
      </h2>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-300">
            Nome do Produto *
          </label>
          <input
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Ex: Teclado Mecanico"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-300">
            Preco (R$) *
          </label>
          <input
            type="number"
            required
            step="0.01"
            min="0"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="Ex: 250.00"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-slate-300">
          URL da Imagem
        </label>
        <input
          type="url"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="https://..."
        />
      </div>

      <div className="mb-6">
        <label className="mb-1 block text-sm font-medium text-slate-300">
          Descricao *
        </label>
        <textarea
          required
          rows="3"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Detalhes do produto..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-600 px-8 py-3 font-bold text-white transition-colors hover:bg-emerald-500 md:w-auto"
      >
        Adicionar ao Catalogo
      </button>
    </form>
  )
}
