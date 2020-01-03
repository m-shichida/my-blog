import React from 'react'
import styles from './styles';

const { Container, Title, Company, CompanyHeader, CompanyName, CompanyPeriod,
        CompanyDescription, } = styles;

const CompanyExperience = () => {
  return (
    <Container>
      <Title>職歴</Title>
      <Company>
        <CompanyHeader>
          <CompanyName>Rails自社開発企業</CompanyName>
          <CompanyPeriod>2019年7月~現在</CompanyPeriod>
        </CompanyHeader>
        <CompanyDescription>
          Railsを使用した建設業業務システムの保守・運用。<br/>
          ・建設業務に関する全ての情報を一括管理できるWEBシステム<br/>
          ・全国の建設現場情報・専門業者情報の情報を集約したWEBシステム<br/>
          この２つのサービスを提供しており、そのうち私は後者の拡張・運用をしています。
          建設業特有の非効率な業態形態を変えることができるよう業務に取り組んでいます。
        </CompanyDescription>
      </Company>

      <Company>
        <CompanyHeader>
          <CompanyName>大手専門工事会社(サブコン)</CompanyName>
          <CompanyPeriod>2018年4月~2019年6月</CompanyPeriod>
        </CompanyHeader>
        <CompanyDescription>
          山留めと呼ばれる建設工事の「営業」として働いていました。営業というより施工管理に近く、現場に出向いての施工に関しての打ち合わせや
          現場の鋼材や鋼材を運ぶための車両の確保を行っていました。
        </CompanyDescription>
      </Company>
    </Container>
  )
}

export default CompanyExperience;
