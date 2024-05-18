'use client'
import React, { Component } from 'react'
import { EArticleType, IArticle } from '@/models'
import { Grid } from '@mui/material'
import CardBasic from '@/components/cards/CardBasic'
import CardCarousel from './CardCarousel'
import CardWelcome from './CardWelcome'
import CardMultiple from './CardMultiple'

interface IList {
  normalIndexs: IArticle[]
  normals: IArticle[]
  carousels: IArticle[]
  hots: IArticle[]
}

interface IProps {
  data: IArticle[]
}

export default class Content extends Component<IProps> {
  handleData = (): IList => {
    const { data } = this.props
    const temp = data.filter((e) => !e.type || e.type === EArticleType.Normal)
    const normalCount = 7
    return {
      carousels: data.filter((e) => e.type === EArticleType.Carousel),
      hots: data.filter((e) => e.type === EArticleType.Hot),
      normalIndexs: temp.slice(0, normalCount),
      normals: temp.slice(normalCount)
    }
  }

  render() {
    const { normals: nomals, normalIndexs: nomalIndexs, hots, carousels } = this.handleData()
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardWelcome />
        </Grid>
        <Grid item xs={3}>
          <CardBasic data={nomalIndexs[0]} />
        </Grid>
        <Grid item xs={3}>
          <CardBasic data={nomalIndexs[1]} />
        </Grid>

        <Grid item xs={3}>
          <CardMultiple data={hots} />
        </Grid>
        <Grid item xs={3}>
          <CardBasic data={nomalIndexs[2]} />
        </Grid>
        <Grid item xs={3}>
          <CardBasic data={nomalIndexs[3]} />
        </Grid>
        <Grid item xs={3}>
          <CardBasic data={nomalIndexs[4]} />
        </Grid>

        <Grid item xs={3}>
          <CardBasic data={nomalIndexs[5]} />
        </Grid>
        <Grid item xs={6}>
          <CardCarousel data={carousels} key={carousels.length} />
        </Grid>
        <Grid item xs={3}>
          <CardBasic data={nomalIndexs[6]} />
        </Grid>

        {nomals.map((item, index) => (
          <Grid item xs={3} key={index}>
            <CardBasic data={item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}