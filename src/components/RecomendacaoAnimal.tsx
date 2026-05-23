"use client"

import { useState } from "react"
import axios from 'axios';
import { Button } from "./Button";

export default function RecomendacaoAnimal() {
  const [caracteristicas, setCaracteristicas] = useState("")
  const [resposta, setResposta] = useState("")
  const [loading, setLoading] = useState(false)

  const buscarRecomendacao = async () => {

    const texto = caracteristicas.trim()

  if (!texto) {
    alert("Descreva o animal que você procura.")
    return
  }

  
  if (texto.length < 15) {
    alert("Descreva melhor as características.")
    return
  }

    setLoading(true)
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/gerarTexto`,
        { prompt: caracteristicas },
        { headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '' } }
      )
      setResposta(res.data.resposta)
    } catch (err) {
      console.error('Erro ao buscar recomendação:', err)
      setResposta("Desculpe, ocorreu um erro ao buscar a recomendação.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h1 className=" font-bold m-4 text-orange-500">
        Descubra o animal ideal
      </h1>

      <textarea
        placeholder="Ex: Moro em apartamento pequeno, trabalho durante o dia e quero um animal calmo..."
        value={caracteristicas}
        onChange={(e) => setCaracteristicas(e.target.value)}
        className="w-full h-32 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-orange-400"
      />

      <Button
              onClick={buscarRecomendacao}
              disabled={loading}
              className="m-4" title={"Buscar Recomendação"}      >
        {loading ? "Analisando..." : "Buscar recomendação"}
      </Button>

      {resposta && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl">
          <h2 className="font-bold text-lg mb-2">
            Recomendação:
          </h2>

          <p className="text-gray-700 whitespace-pre-line">
            {resposta}
          </p>
        </div>
      )}
    </div>
  )
}