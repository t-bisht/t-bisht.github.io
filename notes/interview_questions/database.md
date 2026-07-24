# Interview question for DB

## Postgrese

### Combining two seprate group bys into one

- Query 1 : select count(*) as eq_count, category from art_equity_instruments group by category;
- Query 2 : select count(*) as eq_count, market_cap_type from art_equity_instruments where market_cap_type is not null
  group by market_cap_type;

- Combined query

```sql
select count(*) as eq_count, cateogry , market_cap_type from art_equity_instruments 
GROUP BY GORUPING SETS ((category),(market_cap_type))
HAVING  category is NOT NULL OR market_cap_type is not NULL
```

- Interesting parts
    - The trick part is combination of market_cap_type is not null
    - It works in this case since there are no cases where category can be null
    - Secondly when PG executes query 2 and it finds market_cap_type as null it would group by market_cap_type = null
      and since grouping is not by category it would keep category as null this these row will be removed from the
      having clause
    - Bigquery also supports grouping sets
    - In case of mysql like DB with no grouping set use UNION all

```sql
SELECT
    category,
    NULL AS market_cap_type,
    COUNT(*) AS eq_count
FROM art_equity_instruments
GROUP BY category

UNION ALL

SELECT
    NULL AS category,
    market_cap_type,
    COUNT(*) AS eq_count
FROM art_equity_instruments
WHERE market_cap_type IS NOT NULL
GROUP BY market_cap_type;
```
