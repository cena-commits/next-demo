import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
  return {
    props: {
      pokemon: await res.json(),
    }
  }
}

export default function Home({ pokemon }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>

      <h1>Pokemon List</h1>

      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>


    </div>
  )
}
