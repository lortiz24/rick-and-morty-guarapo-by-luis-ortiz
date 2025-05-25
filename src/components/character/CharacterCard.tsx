import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface CharacterCardProps {
	name: string;
	image: string;
	species: string;
	onClick: () => void;
}

export const CharacterCard = ({ name, image, species, onClick }: CharacterCardProps) => {
	return (
		<Card
			sx={{
				width: 240,
				height: 244,
				borderRadius: 2,
				boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
				cursor: 'pointer',
			}}
			elevation={0}
			onClick={onClick}
		>
			<CardMedia
				component='img'
				image={image}
				alt={name}
				sx={{
					height: 168,
					width: '100%',
					objectFit: 'cover',
				}}
			/>
			<CardContent sx={{ p: 2, pb: '0!important' }}>
				<Typography
					sx={{
						fontSize: 20,
						fontWeight: 700,
						mb: 0.5,
						lineHeight: 1.2,
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
						width: 200,
						display: 'block',
					}}
				>
					{name}
				</Typography>
				<Typography
					sx={{
						fontSize: 14,
						fontWeight: 400,
						color: 'rgba(0,0,0,0.6)',
					}}
				>
					{species}
				</Typography>
			</CardContent>
		</Card>
	);
};
