import { useState } from 'react'

export default function ProdutoForm({ aoAdicionarProduto }) {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')
  
  // Novo estado para o feedback de erro
  const [erro, setErro] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validação com .trim() conforme feedback
    if (!nome.trim() || !descricao.trim() || !preco) {
      setErro('Por favor, preencha todos os campos obrigatórios com informações válidas.')
      return
    }

    // Limpa o erro se a validação passar
    setErro('')

    const novoProduto = {
      id: Date.now(),
      nome: nome.trim(),
      preco: Number.parseFloat(preco),
      descricao: descricao.trim(),
      imagem: imagem || 'https://via.placeholder.com/400x300?text=Novo+Produto',
    }

    aoAdicionarProduto(novoProduto)

    // Reset dos campos
    setNome('')
    setPreco('')
    setDescricao('')
    setImagem('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40 p-8 shadow-2xl backdrop-blur-xl transition-all"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"></div>

      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          Novo Produto
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Preencha os detalhes para adicionar ao catálogo.
        </p>
      </div>

      {/* FEEDBACK VISUAL DE ERRO */}
      {erro && (
        <div className="mb-6 rounded-lg bg-red-500/10 p-4 border border-red-500/50">
          <p className="text-sm font-semibold text-red-400">{erro}</p>
        </div>
      )}

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="group">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors group-focus-within:text-emerald-400">
            Nome do Produto <span className="text-emerald-500">*</span>
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-xl border border-white/5 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-600 transition-all duration-300 focus:border-emerald-500/50 focus:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
            placeholder="Ex: Teclado Mecânico"
          />
        </div>

        <div className="group">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors group-focus-within:text-emerald-400">
            Preço (R$) <span className="text-emerald-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
              R$
            </span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              className="w-full rounded-xl border border-white/5 bg-slate-900/50 py-3 pl-10 pr-4 text-white placeholder-slate-600 transition-all duration-300 focus:border-emerald-500/50 focus:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>

      <div className="group mb-6">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors group-focus-within:text-emerald-400">
          URL da Imagem
        </label>
        <input
          type="url"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className="w-full rounded-xl border border-white/5 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-600 transition-all duration-300 focus:border-emerald-500/50 focus:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
          placeholder="https://sua-imagem.com/foto.jpg"
        />
      </div>

      <div className="group mb-8">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors group-focus-within:text-emerald-400">
          Descrição <span className="text-emerald-500">*</span>
        </label>
        <textarea
          rows="3"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full resize-none rounded-xl border border-white/5 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-600 transition-all duration-300 focus:border-emerald-500/50 focus:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
          placeholder="Escreva os detalhes técnicos e diferenciais do produto..."
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="w-full transform rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3.5 font-bold tracking-wide text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-4 focus:ring-emerald-500/30 md:w-auto"
        >
          Adicionar ao Catálogo
        </button>
      </div>
    </form>
  )
}