# Post a message to a Sphinx Bot

## Inputs

### `tribe_url`
**Required** URL of your Tribe.

### `bot_id`
**Required** ID of your BOT

### `bot_secret`
**Required** BOT Secret

### `chat_uuid`
**Required** CHAT_UUID

### `bot_message`
**Required** Message to send to the Bot

## Outputs
JSON response from the Bot

## Example usage

```yml
- name: Notify Sphinx Bot
  uses: stakwork/sphinx-bot-ga@v0.1.0
  with:
    tribe_url: ${{ secrets.TRIBE_URL }}
    bot_id: ${{ secrets.BOT_ID }}
    bot_secret: ${{ secrets.BOT_SECRET }}
    chat_uuid: ${{ secrets.CHAT_UUID }}
    bot_message: This works!
```