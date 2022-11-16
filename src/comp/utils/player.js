import Player from '@wasd/wasd-player'
import '@wasd/wasd-player/dist/css/player.component.css'

export const PlayerWazd = (videoSrc) => {
  const wp = window.customElements.get('wasd-player')
  if (!wp) window.customElements.define('wasd-player', Player.Component)

  const container = {
    result: {
      created_at: '2020-08-12T10:35:22.520Z',
      deleted_at: null,
      updated_at: '2020-08-12T10:35:22.520Z',
      clip_id: 3927,
      clip_title: '',
      clip_media_container_id: 538701,
      expire_at: '2020-09-11T10:35:22.520Z',
      clip_views_count: null,
      clip_type: 'DEFAULT',
      clip_data: {
        url: videoSrc,
        start: 1597228019,
        preview: {
          large: '',
          small: '',
          medium: ''
        },
        duration: 20,
        mediaContainerId: 538701
      },
      clip_mature_content: false,
      clip_owner_profile_id: 455094,
      clip_game_id: 12,
      clip_game_name: '',
      clip_owner_login: '',
      clip_channel: {
        created_at: '2020-07-20T15:44:47.858Z',
        deleted_at: null,
        updated_at: '2020-08-12T11:38:52.807Z',
        channel_id: 413413,
        channel_name: '',
        user_id: 432193,
        followers_count: 69,
        channel_subscribers_count: 0,
        channel_is_live: true,
        channel_description: '',
        channel_donation_url: null,
        channel_image: {
          large: '',
          medium: '',
          small: ''
        },
        channel_status: 'ACTIVE',
        channel_clips_count: 15
      }
    }
  }

  const player = document.createElement('wasd-player')

  player.setAttribute('mediacontainer', JSON.stringify(container))
  player.setAttribute('fullscreenelement', '.player')
  player.setAttribute('updateinfo', '')
  player.setAttribute('controls', '')
  player.setAttribute('autoplay', '')
  player.setAttribute('width', '100%')
  player.setAttribute('height', '100%')
  player.setAttribute('buttons', JSON.stringify({ advanced: false }))

  return player
}
