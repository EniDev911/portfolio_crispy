---
title: "MySQL 🐬 : Funciones de Información"
author: enidev911
categories: [Bases de Datos Relacionales, "MySQL - Extras/Trucos"]
tags: [Bases de Datos]
---

MySQL provee una serie de **funciones de información** que son esenciales para obtener detalles sobre el servidor y estructuras de bases de datos, tablas, columnas y otros objetos, así como para consultar el estado y rendimiento del servidor. Estas funciones son útiles para conocer el contexto de la bse de datos en uso y del servidor.


### CHARSET

La función `CHARSET()` nos devuelve el conjunto de caracteres del argumento de la cadena proporcionada:

```sql
SELECT CHARSET('abc');
```
{: .nolineno }

El resultado puede ser algo como lo siguiente:

```
+----------------+
| CHARSET('abc') |
+----------------+
| utf8mb4        |
+----------------+
```
{: .noheader }

### VERSION

La función `VERSION()` nos devuelve una cadena que indica la versión del servidor MySQL:

```sql
SELECT VERSION();
```
{: .nolineno }

El resultado puede ser algo como lo siguiente:

```
+-----------+
| VERSION() |
+-----------+
| 8.0.27    |
+-----------+
```
{: .noheader }

### BECHMARK

La función `BECHMARK()` permite medir el tiempo de ejecución de una expresión, útil para medir el rendimiento de ciertas consultas:


```sql
SELECT BECHMARK(1000, SHA1('test'));
```
{: .nolineno }


<div class="language-plaintext highlighter-rouge">
<div class="code-header">
  <span data-label-text="MySQL"><i class="fas fa-code fa-fw small"></i></span>
  <span class="m-4"></span>
</div>
<div class="highlight p-2">
<code><pre style="overflow: inherit;">
<span class="hl">mysql&gt; SELECT BENCHMARK(1000000, SHA1('test'));</span>
+----------------------------------+
| BENCHMARK(1000000, SHA1('test')) |
+----------------------------------+
|                                0 |
+----------------------------------+
<span class="hl">1 row in set (1.65 sec)</span>
mysql&gt;
<span class="hl">mysql&gt; SELECT BENCHMARK(10000000, SHA1('test'));</span>
+-----------------------------------+
| BENCHMARK(10000000, SHA1('test')) |
+-----------------------------------+
|                                 0 |
+-----------------------------------+
<span class="hl">1 row in set (16.63 sec)</span>
</pre></code>
</div>
</div>

---

## Base de Datos Especial (INFORMATION_SCHEMA)

Aunque no es una función específica, MySQL tiene una base de datos especial llamada `INFORMATION_SCHEMA`, que contiene varias vistas que proporcionan información sobre las bases de datos, tablas, columnas y otros objetos del sistema.

**Ejemplos de uso**

1. Obtener las tablas de una base de datos:

```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'mysql';
```
{: .nolineno }

La consulta anterior nos mostraría un resultado como el siguiente:

<details markdown="1">
 <summary>Mostrar</summary>

```
+------------------------------------------------------+
| TABLE_NAME                                           |
+------------------------------------------------------+
| columns_priv                                         |
| component                                            |
| db                                                   |
| default_roles                                        |
| engine_cost                                          |
| func                                                 |
| general_log                                          |
| global_grants                                        |
| gtid_executed                                        |
| help_category                                        |
| help_keyword                                         |
| help_relation                                        |
| help_topic                                           |
| innodb_index_stats                                   |
| innodb_table_stats                                   |
| ndb_binlog_index                                     |
| password_history                                     |
| plugin                                               |
| procs_priv                                           |
| proxies_priv                                         |
| replication_asynchronous_connection_failover         |
| replication_asynchronous_connection_failover_managed |
| replication_group_configuration_version              |
| replication_group_member_actions                     |
| role_edges                                           |
| server_cost                                          |
| servers                                              |
| slave_master_info                                    |
| slave_relay_log_info                                 |
| slave_worker_info                                    |
| slow_log                                             |
| tables_priv                                          |
| time_zone                                            |
| time_zone_leap_second                                |
| time_zone_name                                       |
| time_zone_transition                                 |
| time_zone_transition_type                            |
| user                                                 |
+------------------------------------------------------+
```
{: .noheader }

</details>

{: start="2" }
2. Obtener las columnas de una tabla

```sql
SELECT column_name FROM information_schema.columns WHERE table_name = '<table_name>';
```
{: .nolineno }

> En la consulta anterior debemos remplazar `<table_name>` por el nombre de la tabla de nuestro interés y esa tabla debe existir en alguna base de datos en el servidor.
{: .prompt-info }
