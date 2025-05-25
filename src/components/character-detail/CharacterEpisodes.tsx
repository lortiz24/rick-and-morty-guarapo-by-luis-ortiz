import { Box, Typography } from '@mui/material';

interface Episode {
  id: string;
  episode: string;
  name: string;
  air_date: string;
}

interface Props {
  episodes: Episode[];
  scrollHeight: number | string;
}

export const CharacterEpisodes = ({ episodes, scrollHeight }: Props) => (
  <Box
    sx={{
      p: 2,
      overflowY: 'auto',
      height: scrollHeight,
      minHeight: 0,
      boxSizing: 'border-box',
    }}
  >
    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.secondary', mb: 2 }}>
      Episodes
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {episodes.map((ep) => (
        <Box
          key={ep.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid #eee',
            pb: 1,
            mb: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {ep.episode}
          </Typography>
          <Typography variant="body2">{ep.name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {ep.air_date}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);
