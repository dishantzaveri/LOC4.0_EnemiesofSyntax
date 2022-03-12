# Generated by Django 3.2.7 on 2022-03-12 07:29

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('links', '0002_fitness_yoga'),
    ]

    operations = [
        migrations.CreateModel(
            name='events',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(default='', max_length=1000)),
                ('location', models.CharField(default='', max_length=1000)),
                ('photo', models.ImageField(blank=True, upload_to='events/')),
                ('sports', models.CharField(default='', max_length=1000)),
                ('Timing', models.CharField(default='', max_length=1000)),
                ('phone', models.BigIntegerField(default=9767297781, validators=[django.core.validators.MinValueValidator(10000000), django.core.validators.MaxValueValidator(10000000000)])),
                ('description', models.CharField(default='', max_length=1000)),
            ],
        ),
    ]
