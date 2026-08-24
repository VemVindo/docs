import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {team, urlPerfil, urlAvatar, type TeamMember} from '@site/src/data/team';
import styles from './styles.module.css';

function MemberCard({nome, usuarioGithub}: TeamMember) {
  return (
    <div className="col col--3">
      <Link className={styles.memberCard} href={urlPerfil(usuarioGithub)}>
        <img
          className={styles.memberAvatar}
          src={urlAvatar(usuarioGithub)}
          alt={`Foto de ${nome}`}
          loading="lazy"
        />
        <Heading as="h3" className={styles.memberName}>
          {nome}
        </Heading>
        <span className={styles.memberHandle}>@{usuarioGithub}</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.team}>
      <div className="container">
        <Heading as="h2" className={styles.teamTitle}>
          Equipe
        </Heading>
        <div className="row">
          {team.map((membro) => (
            <MemberCard key={membro.usuarioGithub} {...membro} />
          ))}
        </div>
      </div>
    </section>
  );
}
