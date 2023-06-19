// src/optimize.js
import axios from 'axios';

export async function optimizeTitleAndDescription(title, description) {
  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{
        role: 'system',
        // content: 'You are an e-commerce business owner implementing SEO strategies in Japanese'
        content: 'あなたはSEO対策を行うEC事業者です。'


      }, {
        role: 'user',
        // content: `Please provide the existing product title and description content so that I can understand them and revise the product title to target higher SEO rankings on Rakuten based on my subjective judgment. The product title should be within 255 bytes and preferably as long as possible. Also, please avoid using complete sentences for the product title. Begin the product title with brackets 【】 and try to include content that attracts customers with a sense of value at the beginning.:


        // content: `提供された既存の商品タイトルと、商品説明文の内容を汲み取り、関連キーワードを羅列してください。キーワードの数は多ければ多いほど良いものとします。ただし関係のないキーワードは含めないように注意してください。キーワードの間には「　」をあけるようにしてください。:


        content: `提供された既存の商品タイトルと、商品説明文の内容を汲み取り、あなたの主観でより楽天のSEO上位を狙えそうな商品タイトルに改修してください。商品タイトルは全角122以上127文字以内で記述してください。また、商品タイトルには文章を含まないでください。商品タイトルは【】の鉤括弧から始めてください。できるだけ顧客のお得感を引く内容を冒頭に記載するようにしてください。クーポン情報や送料無料などのお得感ある情報は【】で囲むようにしてください。それ以外はあまり【】を使わないでください。:

        Title: ${title}
    
        Description: ${description}
        `
    }],
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  if (response.data.choices && response.data.choices.length > 0 && response.data.choices[0].message) {
    return response.data.choices[0].message.content.trim();
  } else {
    throw new Error('No optimization result returned from the API.');
  }
}
